import {GanttChartSquare, Blocks, Video} from 'lucide-react';
import {
     Card,
     CardContent,
     CardDescription,
     CardTitle,
     CardHeader
 } from '@/components/ui/card';

const data = [
    {
        icon : <GanttChartSquare size={72} strokeWidth={0.8}/>,
        title : 'Artikel',
        description : 
        'Artikel yang telah dibuat',
    },
    {
        icon : <Video size={72} strokeWidth={0.8}/>,
        title : 'Video',
        description : 
        'Video yang telah dibuat berupa hasil dari wawancara ',
    },
    {
        icon : <Video size={72} strokeWidth={0.8}/>,
        title : 'Poster',
        description : 
        'Poster yang telah dibuat',
    },
];
const Projects = () => {
    return (
        <section className=" mb-12 xl:mb-36">
        <div className="container mx-auto">
            <div className="flex justify-between gap-x-8">
                {/* text */}
                <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 
                text-center xl:text-left">
                    <div className="section-title mb-10 pb-10">Hasil Luaran PjBL </div>            
                  </div>
            </div>
            {/* icons */}
         <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24'>
            {data.map((item, index) => {
                return <Card className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative' key={index}>
                    <CardHeader className='text-primary relative -top-[60px]' >
                        <div className='w-[140px] h-[80px]  flex justify-center items-center  '>
                            {item.icon}
                        </div>
                    </CardHeader>
                    <CardContent className='text-center mx-auto'>
                        <CardTitle>
                            {item.title}
                        </CardTitle>
                    </CardContent>
                </Card>
            })}
         </div>
        </div>
    </section>
    );
};

export default Projects;