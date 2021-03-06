import * as React from "react";
import AboutCard from "components/UIComponents/base/AboutCard";

interface IProps {}

const EditorPage: React.FC<IProps> = props => {
    return (
        <>
            <AboutCard />
        </>
    );
};

EditorPage.defaultProps = {};

export default EditorPage;
