import React from "react";

import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import FourPDA from "../PNG/socials/4pda.png";
import Discord from "../PNG/socials/discord.png";
import Facebook from "../PNG/socials/facebook.png";
import GitHub from "../PNG/socials/github.png";
import ICQ from "../PNG/socials/icq.png";
import Instagram from "../PNG/socials/instagram.png";
import LinkedIn from "../PNG/socials/linkedIn.png";
import Pikabu from "../PNG/socials/pikabu.png";
import Pinterest from "../PNG/socials/pinterest.png";
import Playground from "../PNG/socials/playground.png";
import Reddit from "../PNG/socials/reddit.png";
import Skype from "../PNG/socials/skype.png";
import Steam from "../PNG/socials/steam.png";
import Telegram from "../PNG/socials/telegram.png";
import Twitter from "../PNG/socials/twitter.png";
import VK from "../PNG/socials/vk.png";
import WakaTime from "../PNG/socials/wakatime.png";
import WorldOfTanks from "../PNG/socials/wot.png";
import YouTube from "../PNG/socials/youtube.png";

const Socials: Record<
	string,
	{
		img: string;
		name: string;
		link: string;
	}
> = {
	GitHub: {
		img: GitHub,
		name: "GitHub",
		link: "https://github.com/RusAnonym",
	},
	WakaTime: {
		img: WakaTime,
		name: "WakaTime",
		link: "https://wakatime.com/@rus_anonym",
	},
	VK: {
		img: VK,
		name: "VK",
		link: "https://vk.com/rus_anonym",
	},
	Telegram: {
		img: Telegram,
		name: "Telegram",
		link: "https://t.me/rus_anonym",
	},
	Facebook: {
		img: Facebook,
		name: "Facebook",
		link: "https://www.facebook.com/rus.anonym",
	},
	Instagram: {
		img: Instagram,
		name: "Instagram",
		link: "https://www.instagram.com/rus.anonym",
	},
	Twitter: {
		img: Twitter,
		name: "Twitter",
		link: "https://twitter.com/rus_anonymchik",
	},
	LinkedIn: {
		img: LinkedIn,
		name: "LinkedIn",
		link:
			"https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D1%81%D0%B5%D0%BC%D0%B8%D0%BD-6bbb2b1b3/",
	},
	Pinterest: {
		img: Pinterest,
		name: "Pinterest",
		link: "https://www.pinterest.ru/rus_anonym",
	},
	Skype: {
		img: Skype,
		name: "Skype",
		link: "skype:live:4b1f037147ec6fdb",
	},
	YouTube: {
		img: YouTube,
		name: "YouTube",
		link: "https://www.youtube.com/channel/UCzbQsGQhIUk98Zu02Hd_OxQ",
	},
	Steam: {
		img: Steam,
		name: "Steam",
		link: "https://steamcommunity.com/id/rus_anonym/",
	},
	Playground: {
		img: Playground,
		name: "Playground",
		link: "https://users.playground.ru/2444466/",
	},
	Discord: {
		img: Discord,
		name: "Discord",
		link: "rus_anonym#2685",
	},
	WorldOfTanks: {
		img: WorldOfTanks,
		name: "World Of Tanks",
		link:
			"https://worldoftanks.ru/ru/community/accounts/91518416-_3JIou_xJIe6uIIIeK_/",
	},
	ICQ: {
		img: ICQ,
		name: "ICQ",
		link: "https://icq.im/rus_anonym",
	},
	FourPDA: {
		img: FourPDA,
		name: "4PDA",
		link: "https://4pda.ru/forum/index.php?showuser=8270750",
	},
	Pikabu: {
		img: Pikabu,
		name: "Pikabu",
		link: "https://pikabu.ru/@RussianAnonymous",
	},
	Reddit: {
		img: Reddit,
		name: "Reddit",
		link: "https://www.reddit.com/user/rus_anonym",
	},
};

function generateImageLink(data: { img: string; name: string; link: string }) {
	return (
		<div
			className="description"
			data-title={data.name}
			style={{
				maxWidth: "64px",
				maxHeight: "64px",
			}}
		>
			<a href={data.link} target="_blank" rel="noopener noreferrer">
				<Image src={data.img} fluid></Image>
			</a>
		</div>
	);
}

function main() {
	return (
		<Container>
			<Row className="justify-content-md-center">
				<div>
					<div>
						{generateImageLink(Socials.GitHub)}
						{generateImageLink(Socials.WakaTime)}
					</div>
				</div>
			</Row>
		</Container>
	);
}

export default main;
