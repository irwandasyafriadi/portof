import DevImg from "./DevImg";
import Image from "next/image";
import {Tabs, TabsContent, TabsList, TabsTrigger} from'@/components/ui/tabs'
import {
    User2,
    MailIcon,
    HomeIcon,
    Calendar,
    Briefcase,
    User,
} from 'lucide-react'

const infoData = [
    {
        icon : <User2 size={20}/>,
        text : 'Irwan',
    }
];

const Data = [
    {
        title : 'Gatau dulu',
        data : [
            {
                univ : 'upnvj',
                jurusan : 'sistem Informasi',
                tahun : '2023',
            },
            {
                univ : 'upnvj',
                jurusan : 'sistem Informasi',
                tahun : '2023',
            },
            {
                univ : 'upnvj',
                jurusan : 'sistem Informasi',
                tahun : '2023',
            },
        ],
    },
];

const skill = [
    {
        title : 'skill',
        data : [
            {
                name : 'gatay',
            },
            {
                name : 'gatay',
            },
            {
                name : 'gatay',
            }
        ],
    },
    {
        title : 'foto',
        data : [
            {
                imgPath : '/hero/hero1.png',
            },
            {
                imgPath : '/hero/hero1.png',
            },
            {
                imgPath : '/hero/hero1.png',
            }
        ],
    },
];

const Middle = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    }   ;

    
    return (
        <section className='xl:h-[860px] pb-12 xl:py-24'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>About me</h2>
            </div>
            <div>
                {/* image */}
                <div>
                    <DevImg containerStyles='bg_about_shape_light'/>
                </div>
            </div>
        </section>
    );
};
export default Middle;