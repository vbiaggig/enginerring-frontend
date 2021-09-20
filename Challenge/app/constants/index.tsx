import { Dimensions } from "react-native"
import { AmazonIcon, AppleIcon, GoogleIcon, ShopifyIcon, TeslaIcon } from "../assets/icons";
import { TechChart, CommunicationChart, EnergyChart } from "../assets/images/yourPies";

export const WINDOWS_WIDTH: number = Dimensions.get('window').width;
export const WINDOWS_HEIGHT: number = Dimensions.get('window').height;

export const BALANCE_ITEMS: object = [
    {
        title: "Portfolio Value",
        amount: 850.64,
        amountType: "USD",
        flag: {
            positive: true,
            amount: 20.23,
            percentage: 2.03,
            date: "Today"
        }
    },
    {
        title: "CAD Balance",
        amount: 500.00,
        amountType: "CAD",
    },
    {
        title: "USD Balance",
        amount: 500.00,
        amountType: "USD",
    },
]

export const YOURPIES_ITEMS: object = [
    {
        title: "Tech Pie",
        data: Array.from({length: 20}, () => Math.floor(Math.random() * 10)),
        color: "#FF63AF",
        amount: 377.03,
        amountType: "USD",
        positive: true,
        degreeAmount: 7.03,
        degreePercentage: 1.90,
        stock: 5,
    },
    {
        title: "Communication Pie",
        data: Array.from({length: 20}, () => Math.floor(Math.random() * 10)),
        color: "#6A6DCD",
        amount: 250.05,
        amountType: "USD",
        positive: false,
        degreeAmount: 3.04,
        degreePercentage: 0.90,
        stock: 3,
    },
    {
        title: "Energy Pie",
        data: Array.from({length: 20}, () => Math.floor(Math.random() * 10)),
        color: "#54BF99",
        amount: 130.03,
        amountType: "USD",
        positive: true,
        degreeAmount: 2.04,
        degreePercentage: 0.90,
        stock: 3,
    },
]

export const WATCHLIST_ITEMS: object = [
    {
        nick: "SHOP",
        name: "Shopify Inc.",
        icon: ShopifyIcon,
        data: Array.from({length: 20}, () => Math.floor(Math.random() * 10)),
        startAngle: Math.floor(Math.random() * 360),
        color: "#FF63AF",
        amount: 52.16,
        amountType: "USD",
        positive: true,
        degreeAmount: 2.16,
        degreePercentage: 4.32,
        sharesPercentage: 13.83,
        sharesAmount: 0.0345,
    },
    {
        nick: "AMZN",
        name: "Amazon.com, Inc.",
        icon: AmazonIcon,
        data: Array.from({length: 20}, () => Math.floor(Math.random() * 10)),
        startAngle: Math.floor(Math.random() * 360),
        color: "#EFC06E",
        amount: 35.70,
        amountType: "USD",
        positive: true,
        degreeAmount: 0.70,
        degreePercentage: 1.99,
        sharesPercentage: 9.47,
        sharesAmount: 0.0103,
    },
    {
        nick: "TSLA",
        name: "Tesla Inc.",
        icon: TeslaIcon,
        data: Array.from({length: 20}, () => Math.floor(Math.random() * 10)),
        startAngle: Math.floor(Math.random() * 360),
        color: "#54BF99",
        amount: 80.96,
        amountType: "USD",
        positive: true,
        degreeAmount: 0.96,
        degreePercentage: 1.20,
        sharesPercentage: 21.47,
        sharesAmount: 0.1114,
    },
    {
        nick: "GOOGL",
        name: "Alphabet Inc. ",
        icon: GoogleIcon,
        data: Array.from({length: 20}, () => Math.floor(Math.random() * 10)),
        startAngle: Math.floor(Math.random() * 360),
        color: "#6A6DCD",
        amount: 110.43,
        amountType: "USD",
        positive: true,
        degreeAmount: 0.43,
        degreePercentage: 0.39,
        sharesPercentage: 29.29,
        sharesAmount: 0.0385,
    },
    {
        nick: "APPL",
        name: "Apple Inc.",
        icon: AppleIcon,
        data: Array.from({length: 20}, () => Math.floor(Math.random() * 10)),
        startAngle: Math.floor(Math.random() * 360),
        color: "#FF63AF",
        amount: 97.77,
        amountType: "USD",
        positive: true,
        degreeAmount: 2.77,
        degreePercentage: 2.92,
        sharesPercentage: 25.93,
        sharesAmount: 0.6395,
    },
]