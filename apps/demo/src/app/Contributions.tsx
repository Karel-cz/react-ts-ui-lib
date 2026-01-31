//@@viewOn:imports
import { Pending, getBorderColor, Block } from "@react-ts-ui-lib/ui";
import { useEffect, useState } from "react";
import { useTheme } from "./context/themeContext";
//@@viewOff:imports

//@@viewOn:constants
const owner = "karel-cz";
const repo = "react-ts-ui-lib";
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
interface GitHubContributor {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
  contributions: number;
}

interface Contributor {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
  contributions: number;
}
//@@viewOff:helpers

//@@viewOn:propTypes
//@@viewOff:propTypes

function Contributions() {
  //@@viewOn:private
  const { darkMode } = useTheme();
  const [contributors, setContributions] = useState<Contributor[]>([]);
  const borderColor = getBorderColor(darkMode);

  const fetchContributors = async () => {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contributors`,
    );
    const data = await response.json();
    const result: Contributor[] = data.map((c: GitHubContributor) => ({
      id: c.id,
      login: c.login,
      html_url: c.html_url,
      avatar_url: c.avatar_url,
      contributions: c.contributions,
    }));

    setContributions(result);
  };

  useEffect(() => {
    const loadContributors = async () => {
      await fetchContributors();
    };
    loadContributors();
  }, []);

  //@@viewOff:private

  //@@viewOn:render

  if (contributors.length === 0) {
    return <Pending />;
  }

  return (
    <div>
      <Block header="Contributions" borderRadius="md" darkMode={darkMode} card="full" >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th
                style={{
                  textAlign: "left",
                  borderBottom: `1px solid ${borderColor}`,
                  padding: "8px",
                }}
              >
                Avatar
              </th>
              <th
                style={{
                  textAlign: "left",
                  borderBottom: `1px solid ${borderColor}`,
                  padding: "8px",
                }}
              >
                Login
              </th>
              <th
                style={{
                  textAlign: "right",
                  borderBottom: `1px solid ${borderColor}`,
                  padding: "8px",
                }}
              >
                Contributions
              </th>
            </tr>
          </thead>
          <tbody>
            {contributors.map((c) => (
              <tr key={c.id}>
                <td
                  style={{
                    padding: "8px",
                    borderBottom: `1px solid ${borderColor}`,
                  }}
                >
                  <img
                    src={c.avatar_url}
                    alt={c.login}
                    width={32}
                    height={32}
                    style={{ borderRadius: 4 }}
                  />
                </td>
                <td
                  style={{
                    padding: "8px",
                    borderBottom: `1px solid ${borderColor}`,
                  }}
                >
                  <a href={c.html_url} target="_blank" rel="noreferrer">
                    {c.login}
                  </a>
                </td>
                <td
                  style={{
                    padding: "8px",
                    borderBottom: `1px solid ${borderColor}`,
                    textAlign: "right",
                  }}
                >
                  {c.contributions}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Block>
    </div>
  );
  //@@viewOff:render
}

//@@viewOn:exports
export { Contributions };
export default Contributions;
//@@viewOff:exports
