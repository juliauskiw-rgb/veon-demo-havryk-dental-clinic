// Facts only from veon/client.json (company.contacts, socials confirmed, C-001…C-006, C-008).
import martaImg from "../assets/team/marta-havryk.webp";
import olesImg from "../assets/team/oles-havryk.webp";
import oliaImg from "../assets/team/olia-maletska.webp";
import annaImg from "../assets/team/anna-plamadiala.webp";
import volodymyrImg from "../assets/team/volodymyr-siryi.png";
import khrystynaHImg from "../assets/team/khrystyna-havryliuk.png";
import katerynaImg from "../assets/team/kateryna-kopychyn.png";
import bohdanImg from "../assets/team/bohdan-ishchenko.png";
import marianaImg from "../assets/team/mariana-huzar.png";
import khrystynaMImg from "../assets/team/khrystyna-matsyshyn.png";
import mariiaImg from "../assets/team/mariia-chovhan.png";
import type { ImageMetadata } from "astro";

export interface Phone { label: string; tel: string; }
export const phoneMain: Phone = { label: "+38 (097) 630-30-70", tel: "+380976303070" };
export const phoneKalyny: Phone = { label: "+38 (097) 232-13-43", tel: "+380972321343" };
export const email = "havrykclinic@gmail.com";
export const hoursShort = "Пн–Пт 09–21, Сб 09–16";
export const hours = [
  { days: "Понеділок – п’ятниця", time: "09:00–21:00" },
  { days: "Субота", time: "09:00–16:00" },
  { days: "Неділя", time: "вихідний" },
];

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export interface Address { id: string; street: string; detail?: string; phone: Phone; phoneNote?: string; map: string; }
export const addresses: Address[] = [
  { id: "kalyny", street: "просп. Червоної Калини, 56", phone: phoneKalyny, map: maps("Львів, проспект Червоної Калини, 56") },
  { id: "khutorivka", street: "вул. Хуторівка, 40а", detail: "каб. 202", phone: phoneMain, phoneNote: "запис за спільним номером", map: maps("Львів, вулиця Хуторівка, 40а") },
];

export const socials = [
  { name: "Instagram", url: "https://www.instagram.com/havrykdentalclinic/" },
  { name: "Facebook", url: "https://www.facebook.com/havrykclinic/" },
  { name: "YouTube", url: "https://www.youtube.com/@havrykdentalclinic" },
  { name: "TikTok", url: "https://www.tiktok.com/@havrykdentalclinic" },
];

export interface Person { name: string; role: string; img: ImageMetadata; }
export const founders: Person[] = [
  { name: "Марта Гаврик", role: "Медичний директор, терапевт, реставратор, головний дитячий стоматолог", img: martaImg },
  { name: "Олесь Гаврик", role: "Головний лікар, хірург, імплантолог, ортопед", img: olesImg },
];
export const team: Person[] = [
  { name: "Оля Малецька", role: "Гнатолог", img: oliaImg },
  { name: "Анна Пламадяла", role: "Терапевт, дитячий стоматолог", img: annaImg },
  { name: "Володимир Сірий", role: "Анестезіолог дитячий і дорослий", img: volodymyrImg },
  { name: "Христина Гаврилюк", role: "Терапевт, ортодонт", img: khrystynaHImg },
  { name: "Катерина Копичин", role: "Терапевт, пародонтолог", img: katerynaImg },
  { name: "Богдан Іщенко", role: "Ендодонтист", img: bohdanImg },
  { name: "Мар’яна Гузар", role: "Ортодонт", img: marianaImg },
  { name: "Христина Мацишин", role: "Асистент стоматолога", img: khrystynaMImg },
  { name: "Марія Човган", role: "Гігієніст", img: mariiaImg },
];
export const kidsTeam: Person[] = [
  { name: "Марта Гаврик", role: "Головний дитячий стоматолог", img: martaImg },
  { name: "Анна Пламадяла", role: "Дитячий стоматолог", img: annaImg },
  { name: "Володимир Сірий", role: "Анестезіолог дитячий і дорослий", img: volodymyrImg },
];

export interface Need { phrase: string; text: string; price: string; priceNote: string; size: "lg" | "md"; kids?: boolean; }
export const needs: Need[] = [
  { phrase: "Немає зуба", text: "Імплантація і протезування: коронки, цифрова стоматологія 3Shape.", price: "від 20 000 грн", priceNote: "імплантація, етап 1", size: "lg" },
  { phrase: "Болить зуб", text: "Терапія та ендодонтія, лікування каналів під мікроскопом.", price: "від 6 200 грн", priceNote: "канал під мікроскопом, 1-канальний зуб", size: "lg" },
  { phrase: "Хочу рівні зуби", text: "Ортодонтія: брекети та елайнери.", price: "21 000 грн", priceNote: "керамічні брекети, за щелепу", size: "md" },
  { phrase: "Хочу білі зуби", text: "Відбілювання та естетичні реставрації.", price: "від 2 500 грн", priceNote: "відбілювання Magic Smile", size: "md" },
  { phrase: "Дитині", text: "Дитяча стоматологія і лікування в медикаментозному сні.", price: "800 грн", priceNote: "дитяча консультація", size: "md", kids: true },
  { phrase: "Ясна та гігієна", text: "Пародонтологія, професійна гігієна, профілактика.", price: "від 2 000 грн", priceNote: "професійна гігієна", size: "md" },
];

export const firstSteps = [
  { price: "800 грн", what: "Консультація" },
  { price: "1 200 грн", what: "Консультація, кошторис і план лікування" },
];
export const priceList = [
  { what: "Імплантація, етап 1: імплант і формувач ясен", price: "від 20 000 грн" },
  { what: "Імплантація, етап 2: металевий абатмент і металокерамічна коронка", price: "від 12 000 грн" },
  { what: "Коронка цирконієва, цифрова", price: "12 300 грн" },
  { what: "Відбілювання Magic Smile", price: "від 2 500 грн" },
  { what: "Елайнери, стандартний кейс", price: "від 90 000 грн" },
  { what: "Професійна гігієна", price: "від 2 000 грн" },
];

export const licences = "Ліцензії МОЗ України №1453/23/М від 25.05.23 та №175 від 01.02.2018";
