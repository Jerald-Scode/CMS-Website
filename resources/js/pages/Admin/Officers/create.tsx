import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Popover } from '@headlessui/react';
import { Head, Link } from '@inertiajs/react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create New Officer',
        href: '/Officers/create',
    },
];

export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create New Officer" />
            <div className='flex justify-center mb-4 m-4'>
               <form>
                <div>
                    <Label className='flex justify-center' htmlFor="name">Name</Label>
                   <Input id="name" placeholder='Enter officer name' name="name" type="text" className="mt-1 block w-full" />
                   <Label className='flex justify-center' htmlFor="position">Position</Label>
                   <Input id="position" placeholder='Enter officer position' name="position" type="text" className="mt-1 block w-full" />
                   <Label className='flex justify-center' htmlFor="email">Birthday</Label>
                   <Input id="birthday" placeholder='Enter officer birthday' name="birthday" type="date" className="mt-1 block w-full" />
                   
                </div>
               </form>
            </div>
        </AppLayout>
    );
}
