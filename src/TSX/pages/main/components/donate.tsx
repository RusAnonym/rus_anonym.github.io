import React from "react";

import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";

import * as Types from "../../../../TS/types/donate";

import Tinkoff from "../../../../PNG/donate/tinkoff.png";
import QIWI from "../../../../PNG/donate/qiwi.png";
import YooMoney from "../../../../PNG/donate/yoomoney.png";

const DonateServices: Record<
	Types.DonateServices,
	{
		img: string;
		name: string;
		link: string;
	}
> = {
	Tinkoff: {
		img: Tinkoff,
		name: "Tinkoff",
		link: "https://www.tinkoff.ru/rm/semin.aleksandr89/z1sI169648/",
	},
	QIWI: {
		img: QIWI,
		name: "QIWI",
		link: "https://qiwi.com/n/ANONYMOUS&blocked[0]=account",
	},
	YooMoney: {
		img: YooMoney,
		name: "YooMoney",
		link: "https://yoomoney.ru/to/410018151299815",
	},
};

function generateImageLink(data: { img: string; name: string; link: string }) {
	return (
		<div>
			<Col className="description">
				<a href={data.link} target="_blank" rel="noopener noreferrer">
					<Image src={data.img} fluid style={{ height: "96px" }} />
				</a>
			</Col>
		</div>
	);
}

const Main: React.FC = () => {
	return (
		<div className="donate">
			{generateImageLink(DonateServices.Tinkoff)}
			{generateImageLink(DonateServices.QIWI)}
			{generateImageLink(DonateServices.YooMoney)}
		</div>
	);
};

export default Main;
