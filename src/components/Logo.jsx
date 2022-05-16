import React from "react";
import NextLink from 'next/link';

function Logo() {
	return (
		<div style={{ display: "flex", width: "280px", fontSize: 17px }}>
			<NextLink href="/">
				<a>Algomint Bridge v2 POC</a>
			</NextLink>
		</div>
	);
}

export default Logo;
