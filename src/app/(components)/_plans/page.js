import { AllInclusive, Autorenew, EqualizerOutlined, EscalatorWarningOutlined } from "@mui/icons-material"

const FuturePlanPage = () => {
    const plans = [
        {
            "title": "nuturing",
            "logo": <Autorenew />,
            "context": ""
        },
        {
            "title": "development",
            "logo": <EqualizerOutlined />,
            "context": ""
        },
        {
            "title": "management",
            "logo": <AllInclusive />,
            "context": ""
        },
        {
            "title": "priviledges",
            "logo": <EscalatorWarningOutlined />,
            "context": ""
        }
    ]
  return (
    <div className="py-8">
        <div className="uppercase font-[montserrat] font-extrabold text-2xl flex justify-center">aims & objectives</div>
        <div className="md:flex py-4">
            {
                plans.map((value, index, array) => {
                    return <div className="md:w-1/4 flex flex-col items-center py-4 md:py-0" key={index}>
                        <div>{value.logo}</div>
                        <div className="uppercase font-extrabold flex justify-center">{value.title}</div>
                        <div>{value.context}</div>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default FuturePlanPage