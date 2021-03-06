import * as React from "react";

/* tslint:disable */
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
/* tslint:enable */
import Home from "../src/pages/Home";

storiesOf("Welcome", module).add("to Storybook", () => (
    <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
    .add("with text", () => (
        <Button onClick={action("clicked")}>Hello Button</Button>
    ))
    .add("with some emoji", () => (
        <Button onClick={action("clicked")}>
            <span role="img" aria-label="so cool">
                😀 😎 👍 💯
            </span>
        </Button>
    ));

storiesOf("Home", module).add("default", () => <Home />);
