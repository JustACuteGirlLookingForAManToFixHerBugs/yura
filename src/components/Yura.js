import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import QuarklycommunityKitLoopText from "./QuarklycommunityKitLoopText";
const defaultProps = {
	"slides": "A,R,U,Y",
	"width": "50px",
	"display": "inline-flex",
	"height": "50px",
	"font": "900 42px/50.4px --fontFamily-googlePacifico",
	"color": "#000000",
	"delayProp": "60"
};
const overrides = {
	"Before Text": {
		"props": {
			"children": <>
				{" "}
			</>
		}
	},
	"After Text": {
		"props": {
			"children": <>
				{" "}
			</>
		}
	},
	"Looped Text": {
		"props": {
			"font": "900 100px/50.4px --fontFamily-googleVt323",
			"color": "#000000"
		}
	}
};

const Yura = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <QuarklycommunityKitLoopText {...rest}>
		<Override slot="After Text" />
		<Override slot="Before Text" />
		{children}
	</QuarklycommunityKitLoopText>;
};

Object.assign(Yura, { ...QuarklycommunityKitLoopText,
	defaultProps,
	overrides
});
export default Yura;