// Button.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Button } from '../../../ui/src/basic-components/Button';

describe('Button', () => {
    it('renders children', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    });

    it('renders label when no children', () => {
        render(<Button label="Submit" />);
        expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
    });

    it('calls onClick when clicked', async () => {
        const onClick = jest.fn();
        render(<Button onClick={onClick}>Click</Button>);
        await userEvent.click(screen.getByRole('button'));
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('is disabled when disabled prop is true', () => {
        render(<Button disabled>Click</Button>);
        expect(screen.getByRole('button')).toBeDisabled();
    });

    it('is disabled when isPending is true', () => {
        render(<Button isPending>Loading</Button>);
        expect(screen.getByRole('button')).toBeDisabled();
    });

    it('renders with significance highlighted', () => {
        render(<Button significance="highlighted">Highlighted</Button>);
        expect(screen.getByRole('button', { name: /highlighted/i })).toBeInTheDocument();
    });

    it('has no-print class when noPrint is true', () => {
        render(<Button noPrint>Hidden</Button>);
        expect(screen.getByRole('button')).toHaveClass('no-print');
    });

    it('sets aria-busy when isPending is true', () => {
        render(<Button isPending>Loading</Button>);
        expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true');
    });

    it('renders with modern prop', () => {
        render(<Button modern>Modern</Button>);
        expect(screen.getByRole('button', { name: /modern/i })).toBeInTheDocument();
    });

    it('renders with colorScheme primary', () => {
        render(<Button colorScheme="primary">Primary</Button>);
        expect(screen.getByRole('button', { name: /primary/i })).toBeInTheDocument();
    });

    it('renders with colorScheme success', () => {
        render(<Button colorScheme="success">Success</Button>);
        expect(screen.getByRole('button', { name: /success/i })).toBeInTheDocument();
    });
    
    
});