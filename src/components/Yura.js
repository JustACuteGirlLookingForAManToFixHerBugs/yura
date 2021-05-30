import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import QuarklycommunityKitLoopText from "./QuarklycommunityKitLoopText";
const defaultProps = {
	"slides": "A,R,U,Y",
	"width": "50px",
	"padding": "0 0px 0 0px",
	"opacity": "1",
	"color": "#ffffff",
	"filter": "contrast(000%) brightness(200%) grayscale(100%)"
};
const overrides = {
	"Looped Text": {
		"props": {
			"color": "#ffffff",
			"font": "normal small-caps 900 100px/100px --fontFamily-googleXanhMono"
		}
	}
};

const Yura = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <QuarklycommunityKitLoopText {...rest}>
		<Override slot="After Text">
			{" "}
		</Override>
		<Override slot="Before Text">
			{" "}
		</Override>
		{children}
	</QuarklycommunityKitLoopText>;
};

Object.assign(Yura, { ...QuarklycommunityKitLoopText,
	defaultProps,
	overrides
});
export default Yura;