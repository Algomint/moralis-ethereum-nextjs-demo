import React from "react";
import { useRouter } from "next/router";
import { Menu } from "antd";
import Link from "next/link";

function MenuItems() {
	const { pathname } = useRouter();

	return (
		<Menu
			theme='light'
			mode='horizontal'
			style={{
				display: "flex",
				fontSize: "17px",
				fontWeight: "500",
				width: "100%",
				justifyContent: "center",
			}}
			defaultSelectedKeys={[pathname]}>
			<Menu.Item key='/wallet'>
				<Link href='/wallet'>
					<a>👛 Wallet</a>
				</Link>
			</Menu.Item>
			<Menu.Item key='/erc20balance'>
				<Link href='/erc20balance'>
					<a>💰 Balances</a>
				</Link>
			</Menu.Item>
			<Menu.Item key='/erc20transfers'>
				<Link href='/erc20transfers'>
					<a>💸 Transfers</a>
				</Link>
			</Menu.Item>
		</Menu>
	);
}

export default MenuItems;
