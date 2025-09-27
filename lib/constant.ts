"use client"
import collab1 from '@/public/images/collab/collab-1.png'
import collab2 from '@/public/images/collab/collab-2.png'
import collab3 from '@/public/images/collab/collab-3.png'
import collab4 from '@/public/images/collab/collab-4.png'
import collab5 from '@/public/images/collab/collab-5.png'
import collab6 from '@/public/images/collab/collab-6.png'
import snapimg1 from '@/public/images/snapshot/slide1.jpg'
import snapimg2 from '@/public/images/snapshot/slide2.jpg'
import snapimg3 from '@/public/images/snapshot/slide3.jpg'
import snapimg4 from '@/public/images/snapshot/slide4.jpg'
import img1 from '@/public/images/home/banner-1.jpg'
import img2 from '@/public/images/home/banner-2.png'
import img3 from '@/public/images/home/banner-3.jpg'

export const navItems = [
    { id: 1, name: "About us", link: "/about-us", hasSubMenu: false },
    { id: 2, name: "ace book club", link: "/ace-book-club", hasSubMenu: false, },
    { 
        id: 3, 
        name: "our projects", 
        link: "/sponsor-education", 
        hasSubMenu: true,
        subMenu: [
            {
                subMenuName: "Ace Book Club",
                subMenuLink: "/ace-book-club"
            },
            {
                subMenuName: "Sponsoring Education ",
                subMenuLink: "/sponsor-education"
            },
            {
                subMenuName: "The Raincoat Project ",
                subMenuLink: "/raincoat-project"
            },
            {
                subMenuName: "Fashion with Compassion ",
                subMenuLink: "/fashion-compassion"
            }
        ], 
    },
    { id: 4, name: "our collabs", link: "/our-collabs", hasSubMenu: false },
    { id: 5, name: "contact us", link: "/contact-us", hasSubMenu: false },
    { id: 6, name: "press", link: "/press", hasSubMenu: false },
    { id: 7, name: "snapshots", link: "/snapshots", hasSubMenu: false },
    { id: 8, name: "donate", link: "/donate", hasSubMenu: false },
]

export const FooterLinks = [
    { name: "About us", link: "/about-us" },
    { name: "Our Projects", link: "#" },
    { name: "Contact us", link: "#" },
    { name: "Donate", link: "#" },
    { name: "Our Collabs", link: "#" },
    { name: "Press", link: "#" },
    { name: "terms of use", link: "#" },
    { name: "Privacy policy", link: "#" },
]

export const ClubLists = ['Story telling', 'Origami', 'Art Craft', 'Rubik’s cube', 'Dance and Drama', 'Chess club']
export const VolunteerLists = ['Teaching', 'Community Service', 'Projects and Initiatives', 'Graphic Design', 'Fund Raising']

export const Partner = [
    { 
        title: "The Aangan Trust", 
        desc: "The Aangan Trust builds communities where even the most vulnerable child is safe, everywhere, every day. They build and strengthen child protection systems to ensure that the most vulnerable children are safe, supported, in school, and assured of childhoods free from trafficking, child marriage, hazardous work, violence, and exploitation.", 
        img: collab1
    },
    { 
        title: "The Committed Communities\nDevelopment Trust", 
        desc: "CCDT is actively addressing deprivation and marginalisation of communities and children in Mumbai’s slums, transforming over two million lives. Since 1990, CCDT has been actively associated with marginalised communities in the slums of Mumbai and its suburbs.", 
        img: collab2
    },
    { 
        title: "The Dharavi School", 
        desc: "The Dharavi School is an initiative by the Art of Living Organization. The school provides a conducive, warm, experiential environment to their students to learn the best of academics and imbibe the best of character building..", 
        img: collab3
    },
    { 
        title: "Fuel A Dream", 
        desc: "Fuel A Dream is a crowdfunding platform that is committed to radically changing the lives of 2.2 Bn people in India and Africa. They operate in the donation and rewards space and are building a marketplace for ideas and causes that will dramatically alter how we fund what is important to all of us.", 
        img: collab4
    },
    { 
        title: "Gift a Smile", 
        desc: "The ‘Gift a Smile–Care for Children’ project is one which caters for children coming from difficult backgrounds or whose parents cannot afford to send them to school. They have 702+ schools across 22 states in India providing free holistic education, food, clothing and other supplies to over 70,000 plus children, focusing specially on the girl child.", 
        img: collab5
    },
    { 
        title: "Samvedna", 
        desc: "Samvedna works to combat caste-based commercial sexual exploitation and human sex trafficking specifically in the Bedia and the Bachhra community. The organisation has a two-pronged approach–working with the victims for their rehabilitation and reintegration, and prioritize prevention for the vulnerable members of the community through advocacy.", 
        img: collab6
    },
]

export const ProjectTeam = [
    { teamname: "Ajinkya Dange, 13", teamschool: "Bombay International School" },
    { teamname: "Myra Vaid, 13", teamschool: "Bombay International School" },
    { teamname: "Siddharth Shah, 16", teamschool: "American School of Bombay" },
    { teamname: "Ariaan Bajaj, 13", teamschool: "Bombay International School" },
    { teamname: "Mysha Jhaveri, 14", teamschool: "Columbia Grammar and Preparatory School" },
    { teamname: "Veer Sumaya, 12", teamschool: "American School of Dubai" },
    { teamname: "Arjun Doshi, 14", teamschool: "Bombay International School" },
    { teamname: "Mustafa Furniturewala, 13", teamschool: "Bombay International School" },
    { teamname: "Vianah Kothari, 13", teamschool: "Bombay International School" },
    { teamname: "Arjun Somani, 13", teamschool: "Bombay International School" },
    { teamname: "Saira Singh, 11", teamschool: "The Cathedral and John Connon School" },
    { teamname: "Vidhushi Karnani, 13", teamschool: "Bombay International School" },
    { teamname: "Avantika Swali, 13", teamschool: "Bombay International School" },
    { teamname: "Samara Sujan, 13", teamschool: "The Cathedral and John Connon School" },
    { teamname: "Vishwaroop Chabaria, 16", teamschool: "Dhirubhai Ambani International School" },
    { teamname: "Diya Bafna, 10", teamschool: "B.D. Somani International School" },
    { teamname: "Sanah Shah, 11", teamschool: "Basis Independent Mclean USA" },
    { teamname: "Yash Asudani, 13", teamschool: "Bombay International School" },
    { teamname: "Miraya Dalmia, 11", teamschool: "Bombay International School" },
    { teamname: "Shawn Aga, 14", teamschool: "Bombay International School" },
    { teamname: "Yohan Zubin Dubash, 14", teamschool: "Bombay International School" },
] 

export const snapCarouselImages = [
    { src: snapimg1, alt: "Slide 1"}, 
    { src: snapimg2, alt: "Slide 2"}, 
    { src: snapimg3, alt: "Slide 3"}, 
    { src: snapimg4, alt: "Slide 4"}
] 

export const homeCarouselImages = [
    { src: img1, alt: "Slide 1"}, 
    { src: img2, alt: "Slide 2"}, 
    { src: img3, alt: "Slide 3"}, 
] 

export const testimonialData = [
    { 
        text: "Since the arrival of the library car, the children have become happier. Children get different books so they develop an interest and a habit of reading. On the day when the library van arrives and the books are distributed, all the children in the class are present. They happily take the books and because of reading their confidence has increased. Children's reading and writing have improved", 
        name: "Mrs. Priya Sankhe", 
        designation: "Headmistress", 
        school: "SSM primary school" 
    },
    { 
        text: "ACE BOOK CLUB has been connected with us for more than a year. It is a really good experience with them. Our students started reading books and that is the motto of ACE BOOK CLUB. Students read other books from our school library now. It was surprising to see that our 10th-grade students read English books. Reading English novels by Marathi medium students is an amazing thing and being a School Leader, I am very happy to see that. Reading habit is cultured in our school by ACE BOOK CLUB. Thanks to the ACE Book Club. Anticipating more such developments with ACE BOOK CLUB.", 
        name: "Mrs. Rane", 
        designation: "Teacher", 
        school: "SSM MCM girls' school" 
    },
    { 
        text: "The service of ACE BOOK CLUB is useful for school students. These books give knowledge and also increase the interest of students in reading. Students enjoyed reading books provided to them by ACE BOOK CLUB. The service of your staff is very very good. They distribute books and collect books in time. Thanks to ACE BOOK CLUB for such a valuable service for students", 
        name: "Mr. Kishor Shinde", 
        designation: "Principal", 
        school: "NM Banasaheb Gawade School" 
    },
    { 
        text: "I appreciate your commitment to implement mobile library service in our Shivaji Vidyalaya. Our children got good books from the library and raincoats were also provided to our students. The children are delighted to receive books regularly. Thank you very much for starting this project in our school.", 
        name: "Mr. Kishor Teli", 
        designation: "Teacher", 
        school: "SSM Boys School" 
    },
    { 
        text: "It is a great experience every time. The distribution is smooth and the kids enjoy all the books. This is also a new subject in their daily timetable that brings a good change. They are more interested in reading new books rather than always focusing on the curriculum subjects.”", 
        name: "Ms. Sonal kahar", 
        designation: "Teacher", 
        school: "Ahiliya Vidya Mandir School" 
    },
]