import React from "react";
import NextLink from 'next/link';

function Logo() {
	return (
		<div style={{ display: "flex", width: "350px", fontSize: "17px", lineHeight: "1.0" }}>
			<NextLink href="/">
				<a>Algomint Bridge v2 POC</a>
			</NextLink>
		</div>
	);
}

export default Logo;
