import React from "react";
import theme from "theme";
import { Theme, Link, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			align-content="center"
			flex-direction="row"
			display="flex"
			background="rgba(0, 0, 0, 0) linear-gradient(-15deg,#040b17 0%,#052722 100%) 0% 0% /auto repeat scroll padding-box"
			height="100vh"
			padding="24px 0 0 0"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				align-content="center"
				align-items="center"
				text-align="center"
			/>
			<Box
				display="flex"
				justify-content="center"
				align-items="center"
				width="100% border-box"
				height="100% border-box"
				flex-direction="row"
				min-width="100%"
				min-height="100% "
				color="#ffffff"
			>
				<Components.Yura intervalProp="1000" font="900 100px/100px --fontFamily-serifGaramond" width="100px">
					<Override slot="Looped Text" />
				</Components.Yura>
				<Components.Yura delayProp="3000" intervalProp="1000" font="900 100px/100px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif" width="100px" />
				<Components.Yura delayProp="2000" intervalProp="1000" font="900 100px/100px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif" width="100px" />
				<Components.Yura delayProp="5000" intervalProp="1000" font="900 100px/100px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif" width="100px" />
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});