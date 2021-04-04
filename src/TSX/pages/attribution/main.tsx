import React from "react";

import { Table } from "react-bootstrap";

import * as DonateTypes from "../../../TS/types/donate";
import * as SocialsTypes from "../../../TS/types/socials";

interface Creator {
	name: DonateTypes.DonateServices | SocialsTypes.Socials | string;
	creator: string;
	link: string;
	distributor: {
		name: string;
		link: string;
	};
}

const Creators: Creator[] = [
	{
		name: "WhatsApp Icon",
		creator: "Freepik",
		link: "https://www.freepik.com",
		distributor: {
			name: "Flaticon",
			link: "https://www.flaticon.com/",
		},
	},
];

const generateCreatorLink = (creatorData: Creator) => {
	return (
		<tr>
			<td>{creatorData.name}</td>
			<td>
				<a href={creatorData.link} target="_blank" rel="noreferrer">
					{creatorData.creator}
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
