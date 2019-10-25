import {
	primary as primaryColor,
	primaryAccent,
	secondary as secondaryColor,
	secondaryAccent
} from "./colors";

// 渐变色 gradients value

export const primary = `linear-gradient( 90deg, ${primaryAccent} 10%, ${primaryColor} 100%)`;
export const secondary = `linear-gradient( 90deg, ${secondaryAccent} 10%, ${secondaryColor} 100%)`;
