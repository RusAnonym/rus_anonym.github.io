import React from "react";

import { Table } from "react-bootstrap";

import * as DonateTypes from "../../../TS/types/donate";
import * as SocialsTypes from "../../../TS/types/socials";

interface Creator {
	name: DonateTypes.DonateServices | SocialsTypes.Socials | string;
	link: string;
	creator: {
		name: string;
		link: string;
	};
	distributor: {
		name: string;
		link: string;
	};
}

const Creators: Creator[] = [
	{
		name: "WhatsApp Icon",
		link: "https://www.flaticon.com/free-icon/whatsapp_1384055",
		creator: {
			name: "Freepik",
			link: "https://www.freepik.com",
		},
		distributor: {
			name: "Flaticon",
			link: "https://www.flaticon.com/",
		},
	},
	{
		name: "Twitter Icon",
		link: "https://www.flaticon.com/free-icon/twitter_889147",
		creator: {
			name: "Pixel perfect",
			link: "https://icon54.com/",
		},
		distributor: {
			name: "Flaticon",
			link: "https://www.flaticon.com/",
		},
	},
	{
		name: "LinkedIn Icon",
		link: "https://www.flaticon.com/free-icon/linkedin_1409945",
		creator: {
			name: "Freepik",
			link: "https://www.freepik.com",
		},
		distributor: {
			name: "Flaticon",
			link: "https://www.flaticon.com/",
		},
	},
	{
		name: "Skype Icon",
		link: "https://www.flaticon.com/free-icon/skype_733570",
		creator: {
			name: "Pixel perfect",
			link: "https://icon54.com/",
		},
		distributor: {
			name: "Flaticon",
			link: "https://www.flaticon.com/",
		},
	},

	{
		name: "Steam Icon",
		link: "https://www.flaticon.com/free-icon/steam_220223",
		creator: {
			name: "Smashicons",
			link: "https://smashicons.com/",
		},
		distributor: {
			name: "Flaticon",
			link: "https://www.flaticon.com/",
		},
	},
	{
		name: "Discord Icon",
		link: "https://www.freepnglogos.com/images/discord-logo-png-7617.html",
		creator: {
			name: "freepnglogos",
			link: "https://www.freepnglogos.com/",
		},
		distributor: {
			name: "freepnglogos",
			link: "https://www.freepnglogos.com/",
		},
	},
];

const generateCreatorLink = (creatorData: Creator) => {
	return (
		<tr>
			<td>
				<a href={creatorData.link} target="_blank" rel="noreferrer">
					{creatorData.name}
				</a>
			</td>
			<td>
				<a href={creatorData.creator.link} target="_blank" rel="noreferrer">
					{creatorData.creator.name}
				</a>
			</td>
			<td>
				<a href={creatorData.distributor.link} target="_blank" rel="noreferrer">
					{creatorData.distributor.name}
				</a>
			</td>
		</tr>
	);
};

const AttributionPage: React.FC = () => {
	return (
		<div className="attributionPage">
			<Table striped bordered hover size="sm" className="table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Creator</th>
						<th>Distributor</th>
					</tr>
				</thead>
				<tbody>{Creators.map((creator) => generateCreatorLink(creator))}</tbody>
			</Table>
		</div>
	);
};

export default AttributionPage;
