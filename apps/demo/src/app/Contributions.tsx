//@@viewOn:imports
import { Pending, getBorderColor, Block, ProfileCard, Button } from "@react-ts-ui-lib/ui";
import { useEffect, useState } from "react";
import { useTheme } from "./context/ThemeContext";
//import { ProfileCard } from "./ProfileCard";
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

  const contributorsSorted = [...contributors].sort(
    (a, b) => b.contributions - a.contributions
  );

  //@@viewOff:private

  //@@viewOn:render

  if (contributors.length === 0) {
    return <Pending />;
  }

  return (
    <div style={{ margin: "16px" }}>
      <Block header="Contributions" borderRadius="md" darkMode={darkMode} card="full" >
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 16,
          alignItems: "start",
        }}
        >
          {contributorsSorted.map((c) => (
            <ProfileCard
              key={c.id}
              photo={c.avatar_url}
              photoLink={c.html_url}
              name={c.login}
              role="GitHub Contributor"
              labelName="Contributions"
              labelValue={c.contributions.toString()}
              darkMode={darkMode}
              collapsed={true}
              width="100%"
              borderRadius="md"
              actionList={[
                <div style={{ display: "flex", justifyContent: "flex-end" }}>  
                  <Button
                    icon="mdi-github"
                    colorScheme="primary"
                    significance="common"
                    modern
                    darkMode={darkMode}
                    size="sm"
                    onClick={() => 
                      window.open(c.html_url, "_blank", "noopener,noreferrer")}
                  >
                    View Profile
                  </Button>
                </div>
              ]}
            />
          ))}
        </div>
        
      </Block>
    </div>

  );
  //@@viewOff:render
}

//@@viewOn:exports
export { Contributions };
export default Contributions;
//@@viewOff:exports
