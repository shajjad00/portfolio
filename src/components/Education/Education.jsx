import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

const Education = () => {
  return (
    <>
      <h2 className=" text-4xl w-fit mt-6 border-b-2 border-b-white pb-4 text-gray-100 text-center mx-auto capitalize">
        My Education
      </h2>
      <div className=" mt-16 max-w-xl mx-auto">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3 text-white">
              <TimelineIcon className=" bg-white"></TimelineIcon>
              <Typography
                variant="h2"
                color="teal"
                className=""
              >
                SSC
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="small"
                color="gary"
                className="font-normal capitalize text-lg mt-2 text-white"
              >
                Completed SSC from cumilla residential school and college in
                2014.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader className="h-3">
              <TimelineIcon className="bg-white" />
              <Typography
                variant="h2"
                color="teal"
                className="leading-none"
              >
                HSC
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="small"
                color="gary"
                className="font-normal capitalize capitalize  mt-3 text-lg text-white"
              >
                Completed SSC from Mohammodpur Model school and college in 2014.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader className="h-3">
              <TimelineIcon className="bg-white" />
              <Typography
                variant="h2"
                color="teal"
                className="leading-none"
              >
                BSC
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography
                variant="small"
                color="gary"
                className="font-normal mt-3 capitalize text-lg text-white"
              >
                Currently Studying Honours 4th Year at{" "}
                <span className=" text-teal-300">
                  Bangladesh University of Textiles
                </span>
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    </>
  );
};

export default Education;
