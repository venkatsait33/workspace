
const plans = [{
    plan: 'Basic',
    price: '199',
    description: "Access to open public desk Free Coffee Break & Snacks High-Speed Wi-Fi internet",
}, {
    plan: 'Premium',
    price: '299',
    description: "Access to open public desk & private office Meeting Room Access 24/7 Building Access",
    }, {
    plan: 'Virtual',
    price: '399',
        description:"Enabled Business Address Monthly Mail Po-Box Handling 2 Hours of Meeting Room Access Monthly"
}]

const PricingPlan = () => {
    return (
        <div className='w-full '>

            <h1 className='mt-10 text-4xl font-bold text-center text-black'>Pricing Plan</h1>
            <div className="grid p-2 mt-10 max-md:grid-cols-2 lg:grid-cols-3">
                {
                    plans.map((plan, index) => {
                        return (
                            <div key={index} className='flex flex-col items-center justify-center mt-10'>
                                <div className=" pricing-card">

                                    <div className="card-header"><h1 className='absolute z-[-1] text-black text-[20px] top-[-30px]'>{plan.plan}</h1></div>
                                    <div className="card-content">
                                        {plan.description}
                                        <hr />
                                        <div className="flex items-center justify-between ">
                                            <div className='font-bold text-md hover:text-[#0F0F0F] hover:underline'> <p>Charged per month</p>
                                                <p>Free trial available</p></div>
                                            <h2 className="text-4xl font-bold text-[#0F0F0F]">${plan.price}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
          
           </div>
    )
}

export default PricingPlan