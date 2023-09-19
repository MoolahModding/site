import {Redirect} from "@docusaurus/router";
import React from "react";

export default function Root(): React.JSX.Element {
    return <Redirect to="/docs" />;
}
