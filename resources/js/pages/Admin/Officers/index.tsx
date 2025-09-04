import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Officers',
        href: '/Officers',
    },
];

export default function Index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Officers" />
            <div className='flex justify-end mb-4 m-4'>
                <Link href='/Officers/create' ><Button>Create Officer</Button>
                </Link>
            </div>
        </AppLayout>
    );
}
