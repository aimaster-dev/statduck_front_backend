import React from 'react'
import PricingsCards from '@/components/PricingsCards'
import DashboardLayout from '@/components/DashboardLayout'
const page = () => {
    return (
        <DashboardLayout>
            <div className="min-h-screen p-4">
                <PricingsCards />
            </div>

        </DashboardLayout>

    )
}

export default page