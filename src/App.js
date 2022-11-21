import logo from "./logo.svg";
import "./App.scss";
import Link from "./components/Link";
import { useState } from "react";

const links = [
    {
        link: "https://semantic-shop-db75jisub-terminatorec.vercel.app/products/microwave",
        title: "Semantic Microdata shop",
        urlImgs: [
            'https://res.cloudinary.com/dpsjoqwvr/image/upload/v1669017038/Screenshot_2022-11-21_at_16-46-22_https___semantic-shop-db75jisub-terminatorec.vercel.app_sun7oi.png',
            'https://res.cloudinary.com/dpsjoqwvr/image/upload/v1669017115/Screenshot_2022-11-21_at_16-51-31_%D0%9C%D0%B8%D0%BA%D1%80%D0%BE%D0%B2%D0%BE%D0%BB%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F_%D0%BF%D0%B5%D1%87%D1%8C_Samsung_MG23J5133AK_BW_%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9_%D0%BA%D1%83%D0%BF%D0%B8%D1%82%D1%8C_mmrduq.png',
        ],
        stack: ["Next","React","TypeScript","TailwindCSS"],
        libs: ['next-seo'],
        tips: ["SEO","Microdata","Semantic"],
    },
    {
        link: "https://terminatorec.github.io/krepair-layout/#/home",
        title: "Krepair - service center ( layout )",
        urlImgs: [
            'https://res.cloudinary.com/dpsjoqwvr/image/upload/v1661603816/Screenshot_2022-08-27_at_21-31-47_Krepair_-_service_center_gfqqce.png',
            'https://res.cloudinary.com/dpsjoqwvr/image/upload/v1661603814/Screenshot_2022-08-27_at_21-31-56_Krepair_-_service_center_whlo5z.png',
            'https://res.cloudinary.com/dpsjoqwvr/image/upload/v1661603816/Screenshot_2022-08-27_at_21-35-53_Krepair_-_service_center_nifkdy.png',
            'https://res.cloudinary.com/dpsjoqwvr/image/upload/v1661603817/Screenshot_2022-08-27_at_21-32-08_Krepair_-_service_center_p2cooi.png',
            'https://res.cloudinary.com/dpsjoqwvr/image/upload/v1661603815/Screenshot_2022-08-27_at_21-32-48_Krepair_-_service_center_byi9te.png',
            'https://res.cloudinary.com/dpsjoqwvr/image/upload/v1661603814/Screenshot_1_cy2u1h.png',
            'https://res.cloudinary.com/dpsjoqwvr/image/upload/v1661603815/Screenshot_2022-08-27_at_21-31-22_Krepair_-_service_center_wnsqa1.png',
            'https://res.cloudinary.com/dpsjoqwvr/image/upload/v1661603814/Screenshot_2022-08-27_at_21-30-46_Krepair_-_service_center_bsmjna.png',
        ],
        stack: ["React","TypeScript","TailwindCSS"],
        libs: ['react-helmet','react-router-dom','slick-carousel','react-yandex-maps'],
        tips: ["Map","Tooltip","Popup","Slider","Hamburger","Adaptive"],
        links: [
            {name: 'figma', link: 'https://www.figma.com/file/6oXZqatJ7jRse5rrXyXyKq/KRepair-~7000-10000?node-id=2%3A7584'},
            {name: 'page 1', link: 'https://terminatorec.github.io/krepair-layout/#/home'},
            {name: 'page 2', link: 'https://terminatorec.github.io/krepair-layout/#/services'},
            {name: 'page 3', link: 'https://terminatorec.github.io/krepair-layout/#/services/price_list'},
            {name: 'page 4', link: 'https://terminatorec.github.io/krepair-layout/#/services/audio'},
            {name: 'page 5', link: 'https://terminatorec.github.io/krepair-layout/#/services/audio/microphone'},
            {name: 'page 6', link: 'https://terminatorec.github.io/krepair-layout/#/about'},
            {name: 'page 7', link: 'https://terminatorec.github.io/krepair-layout/#/contacts'},
            {name: 'page 8', link: 'https://terminatorec.github.io/krepair-layout/#/contacts/requisites'},
            {name: 'page 9', link: 'https://terminatorec.github.io/krepair-layout/#/error'},
        ],

    },
    {
        link: "https://terminatorec.github.io/drawing-canvas/",
        title: "Simple canvas draw",
        urlImgs: [
            'https://res.cloudinary.com/dpsjoqwvr/image/upload/v1661099307/Screenshot_2022-08-22_at_01-27-50_Drawing_ifn9iw.png',
        ],
        stack: ["React","TypeScript","TailwindCSS"],
        libs: ['react-colorful','react-helmet','react-hook-svgdrawing'],
        tips: ["Drawing","Save png/svg","Custom icons","Counter"],
    },
    {
        link: "https://tasks-frontend1.vercel.app/",
        title: "Tasks multi app",
        urlImgs: [
            'https://res.cloudinary.com/dpsjoqwvr/image/upload/v1661097392/Screenshot_2022-08-22_at_00-54-59_React_Redux_App_ddx6pj.png',
            'https://res.cloudinary.com/dpsjoqwvr/image/upload/v1661097392/Screenshot_2022-08-22_at_00-54-00_React_Redux_App_zm8q11.png',
    ],
        stack: ["MongoDB", "Express","React","NodeJs","TypeScript","TailwindCSS"],
        libs: ['react-hook-form','react-router-dom','react-icons','jsonwebtoken','bcrypt','mongoose','cors'],
        tips: ["Login/Register","Progress","Set tasks","Draggable","Settings","Customizable interface"],
    },
    {
        link: "https://quiz-frontend-theta.vercel.app/forms/page/1",
        title: "Paid Quizes app",
        urlImgs: [
            'https://res.cloudinary.com/dpsjoqwvr/image/upload/v1660625743/Screenshot_2022-08-16_at_13-44-10_Paid_Quizes_Get_money_for_your_opinion_xd6jgc.png',
            'https://res.cloudinary.com/dpsjoqwvr/image/upload/v1660625741/Screenshot_2022-08-16_at_13-52-04_Paid_Quizes_Get_money_for_your_opinion_voytss.png',
            'https://res.cloudinary.com/dpsjoqwvr/image/upload/v1660625741/Screenshot_2022-08-16_at_13-51-42_Paid_Quizes_Get_money_for_your_opinion_vj1ene.png',
            'https://res.cloudinary.com/dpsjoqwvr/image/upload/v1660625741/Screenshot_2022-08-16_at_13-52-39_Paid_Quizes_Get_money_for_your_opinion_eqkorn.png',
            'https://res.cloudinary.com/dpsjoqwvr/image/upload/v1660625741/Screenshot_2022-08-16_at_13-52-25_Paid_Quizes_Get_money_for_your_opinion_jpojcn.png',
            'https://res.cloudinary.com/dpsjoqwvr/image/upload/v1660625744/Screenshot_2022-08-16_at_13-51-50_Paid_Quizes_Get_money_for_your_opinion_lrhfzf.png',
        ],
        stack: ["MongoDB", "Express","React","NodeJs","TypeScript","TailwindCSS"],
        libs: ['react-chartjs-2','react-helmet','react-hook-form','react-toastify','react-icons','jsonwebtoken','bcrypt','mongoose','cors'],
        tips: ["Login/Register","Create","Economy","Dark/light theme","Sorting","Change password","Search","Notifications"],
    },
    {
        link: "https://color-palettes-frontend.vercel.app/",
        title: "Color palettes app",
        img: "color-palettes.png",
        stack: ["MongoDB", "Express","React","NodeJs","TypeScript","Redux","TailwindCSS"],
        libs: ['react-colorful','react-helmet','react-hook-form','react-toastify','react-icons','jsonwebtoken','bcrypt','mongoose'],
        tips: ["Login/Register","Create palette","Counters of likes","My favorites","My likes","Copy by click","Validation","Notifications"],
        // links: [{name: 'Original', link: 'https://www.figma.com/file/CSMdjKVD3LzGPe6IJZWPd3/Promkaskad-~4000-7000?node-id=0%3A1'}],
    },
	{
		link: "https://good-blog-frontend.vercel.app/",
		title: "Fullstack blog",
		img: "fullstack-1.png",
		stack: ["MongoDB", "Express","React","NodeJs"],
		tips: ["Login/Register","Create post","Counters of likes, Views, comments","Sorting posts","Find posts by tag","Upload images"],
        // links: [{name: 'Original', link: 'https://www.figma.com/file/CSMdjKVD3LzGPe6IJZWPd3/Promkaskad-~4000-7000?node-id=0%3A1'}],
	},
	{
		link: "https://remarkable-melba-4642da.netlify.app/",
		title: "Simple MERN project",
		img: "simple-mern.png",
		stack: ["MongoDB", "Express","React","NodeJs"],
		tips: ["1st fullstack project"],
        // links: [{name: 'Original', link: 'https://www.figma.com/file/CSMdjKVD3LzGPe6IJZWPd3/Promkaskad-~4000-7000?node-id=0%3A1'}],
	},
	{
		link: "https://terminatorec.github.io/brand-page/",
		title: "TailwindCSS layout",
		img: "tailwindcss1.png",
		stack: ["React", "TailwindCSS"],
		tips: ["React-scroll", "Heroicons", "React-icons"],
        // links: [{name: 'Original', link: 'https://www.figma.com/file/CSMdjKVD3LzGPe6IJZWPd3/Promkaskad-~4000-7000?node-id=0%3A1'}],
	},
	{
		link: "https://terminatorec.github.io/layout_css-in-js_1/",
		title: "CSS-in-JS layout",
		img: "verstka1.png",
		stack: ["React", "Typescript", "CSS-in-JS ( Emotion )"],
		// tips: ["Find matches", "Custom separator", "Checkbox", "Filter"],
        links: [{name: 'Original', link: 'https://www.figma.com/file/CSMdjKVD3LzGPe6IJZWPd3/Promkaskad-~4000-7000?node-id=0%3A1'}],
	},
	{
		link: "https://terminatorec.github.io/find-matches/",
		title: "Find matches",
		img: "find-matches.png",
		stack: ["React", "Typescript", "SCSS"],
		tips: ["Find matches", "Custom separator", "Checkbox", "Filter"],
	},
	{
		link: "https://terminatorec.github.io/chess/",
		title: "Chess",
		img: "chess.png",
		stack: ["React", "Typescript", "SCSS"],
		tips: ["Object Oriented Programming", "Game", "UlbiTV lesson"],
	},
	{
		link: "https://terminatorec.github.io/quiz/",
		title: "Quiz app",
		img: "quiz.png",
		stack: ["React", "Typescript", "Redux", "SCSS"],
		tips: [
			"Create quiz",
			"Preview",
			"Checkout before submit",
			"Warn notifications",
			"Statistics",
		],
	},
	{
		link: "https://terminatorec.github.io/calculator/",
		title: "Calculator",
		img: "calculator.png",
		stack: ["React", "SCSS"],
		tips: ["Calculator", "Dark/Light themes", "Error notifications"],
	},
	{
		link: "https://terminatorec.github.io/timersapp/#/time/timer",
		title: "Time",
		img: "time.png",
		stack: ["React", "SCSS"],
		tips: ["Timer", "Stopwatch", "Vacuum"],
	},
	{
		link: "https://terminatorec.github.io/column-cards/",
		title: "Kanban desks",
		img: "kanbandesks.png",
		stack: ["React", "SCSS"],
		tips: [
			"3 desks",
			"Check progress",
			"LocalStorage",
			"Works only on computers",
		],
	},
	{
		link: "https://terminatorec.github.io/chat/#/chat/login",
		title: "Online chat",
		img: "chat.png",
		stack: ["React", "Firebase", "SCSS"],
		tips: [
			"Registarion with email",
			"Firebase Firestore",
			"Realtime database",
		],
	},
	{
		link: "https://terminatorec.github.io/todo2/#/todo2",
		title: "ToDo2 RandomSmile",
		img: "todo2.png",
		stack: ["React", "SCSS"],
		tips: [
			"Random smile for every task",
			"You can set category color",
			"LocalStorage",
		],
	},
	{
		link: "https://terminatorec.github.io/react-gh-pages-reactposts/#/react-gh-pages-reactposts/posts",
		title: "Posts",
		img: "posts.png",
		stack: ["React", "SCSS"],
		tips: ["UlbiTV lesson"],
	},
];

function App() {
	return (
		<div className="App">
			<div className="Links">
				{links.map((item) => (
					<Link
						link={item.link}
						title={item.title}
						tips={item.tips}
						stack={item.stack}
						img={item.img}
                        links={item.links}
                        urlImgs={item.urlImgs?item.urlImgs:''}
                        libs={item.libs?item.libs:''}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
