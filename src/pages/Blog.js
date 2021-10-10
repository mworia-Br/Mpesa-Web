// material
import { Grid, Container, Stack, Typography } from "@material-ui/core";
// components
import Page from "../components/Page";
import { BlogPostCard, HighlightCard } from "../components/_dashboard/blog";
// ----------------------------------------------------------------------

const discover = [
  {
    id: "1",
    cover:
      "https://pbs.twimg.com/profile_images/841769202201550850/5gk9sw2G_400x400.jpg",
    title: "BOOK A BUS",
  },
  {
    id: "2",
    cover:
      "data:image/png;base64,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",
    title: "BUY GIFT VOUCHERS",
  },
  {
    id: "3",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62n5Gre1IusazRXYhIq8sB7Ufr8RSbcL7rra1qW8s4Fkx1D8q6AHpMvnL8AMCgWEEI3w&usqp=CAU",
    title: "CPF",
  },
  {
    id: "4",
    cover:
      "https://play-lh.googleusercontent.com/VFJzKqiDcyrzcf3BDRkPXJ2JxBFPS_lcQr89BrXPP-CDNSojfy44K6KHUa-gPZd7r4w",
    title: "DSTV",
  },
  {
    id: "5",
    cover: "https://i.imgur.com/JgVqHBs.png",
    title: "E-BIMA",
  },
  {
    id: "6",
    cover:
      "data:image/jpeg;base64,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",
    title: "MADARAKA EXPRESS",
  },
  {
    id: "7",
    cover: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///+t3sAxrGKq3b4qql6v38Km27sjqVojqVu548kIpVGz4MU9sGoYp1bz+vYbp1fJ6dWf07HU69zM6teP0Kiy28C+4cre8OVcuX52xZS43sXx+fRlvIXJ5dJuv4tIs3FTt3iBx5mHyZ6m1bbn9OuVzqiO0KYZUBUMAAAEmklEQVR4nO3d6ZqiOACFYREMmBJQbFHLpbTUvv9LbEnABaIsJpDQ5/1VI89055sgIMSawQAAAAAAAAAAAAAAAAAAAAAAAAAA+md32R8mk8PxFHU9EiWWaxp6jjMcOo7rO5eg6/HIdt7Sa9ydRy9dD0muxXNfwh0uux6VREc/35egcdfjkmYfZlGO67rebTrpd9cjk+Q3DXR8bz1bLC5b6maJ/Tio7ijPCQ+79JXg5Hnpm7EXh9R0wqj1+OKavzO9fVejkujCC/3cDnnhibQHB1S+j9Jd/vVfVu5suxiTVAsW4v0pbpmwYyrdtD8muVaswxVs2bH91D21PiTJ2E7qCS/RJr3YTSM2Ub7weDJjpwyv7SFJFrOzPRVum/Nthp8ST2yefoTbznx+zy0PSbJTcih1DsJtG4pCE1QoNPyqpv+Fs/+6MOhR4Uq4DYVmQCEK9YfCHhR6KPwPCg2/780LxfdiUGgGFKJQfyhEof4u5YWGX9NUKOzFHIqfZRtTeI52mbhg77wuHJhQeJ4dqO+HqdsPd+z5qLmF0Yp6hdVcAsYW7ouL1XpVuMxW/fS1MFvp1NvCKAt0XJ9eDzaZ8P6jdxMaWLhJl1M6/mHR/JpE58IDP8Z4k4+Gp3HhN5/CcP3ZH6NxIZ9B9/jhH6NvIV8k8+K5Zw36Fm75mruaiyimyXXq9BH7D+WSh1fmQhFzbnFpEV+rVncftWzr0fWf+LLFv5ZdDRnNW4p8t1btja/nQisr/DPKv/6STeJWGtkKEuGCyrckFF6RuYqknHef29+QU2jZYxVNz47sU23tU4WkQsseqYh60nGhZX2pqHrU7V6azKLqrxOdmq3tlVdoEcV3IHdyzxZ/6xdatpKwO37G/635b70odBoVKr7UWzX6pkShcOQ1LrSs8r/vE9/8ylv8dP4lqYVE8cpi/ukprLefytxLLVvxpc2CfwL2a50T5RaqvrJJ72K4PzXe8VILlR9NN+mtNoeuFlXfEeOvvE8KidK+q/nj3UQv+XJv5n6bdHLzk7j9cDPUuXAQ17gjPMylP2/TtXAQhRWfWpRoctXWTuEg2FZ9MqOiUPEpPzU/0MpPZ2QXtvXbCpaXCU2eVRQfjYZuniMWNjsftngPMlg+Pd7+zizyjmuR/X7WZAqJjt9aHI/EmgRaLdysqa94TdOc6gvvZmQWajmFMgu1fBfKLFR9m6YpaYVEx6dVCVmFrdzXb0RSoa676EBSIRnreZBhPi+0yVjL82BmXF5I3rHjSOP5S5QXkiDYpIKCrodfQYXCrof4IRSiUH8oRKH+UIhC/aEQhfrrf2FcFqj8ybVq49JC0+cQhSjUHwpRqL/ywv6fD1GoOxSaX1h+5d3OSi51pmWfntr4RpNSUWnhtOshfmhDygr1fX5dUdkcarpKpoaSN6Kt/CtpypXspubvpCVnRNv0c0UieDeJei43rCt6nWj8qSIVvzzYmH+YSb24LdzCt5dbE4t2VOOv154sSWEa9V1t2EwQPzXaZGz8/7arIJhbxLbt5Dd+EDLtXx+zWc6TX9YS9TQPAAAAAAAAAAAAAAAAAAAAAAAA4J1/0dpe9AhzWU8AAAAASUVORK5CYII=",
    title: "MDAKTARI",
  },
  {
    id: "8",
    cover: "https://kenyansconsult.co.ke/wp-content/uploads/2021/02/Minet-Insurance-Kenya.png",
    title: "MINET",
  },
  {
    id: "9",
    cover: "data:image/png;base64,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",
    title: "MTICKETS",
  },
  {
    id: "10",
    cover: "https://arkafrica.com/wp-content/uploads/2021/02/ark-proto-feature-brandcreation-identity-progas-scaled.jpg",
    title: "PRO GAS",
  },
];

// ----------------------------------------------------------------------

export default function Blog() {
  return (
    <Page title="Discover | Mpesa ">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Discover
          </Typography>
        </Stack>

        <Stack
          mb={5}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="subtitle2" gutterBottom>
            HIGHLIGHTED
          </Typography>
        </Stack>
        <HighlightCard title="SAFARICOM BUNDLES" subtitle="safaricom" outlinedButton="Buy Bundles" containedButton="Tunukiwa bunbles" img="https://www.techinafrica.com/wp-content/uploads/2021/08/151.-safaricom.png"/>
        <Stack
          mb={5}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="subtitle2" gutterBottom>
            DISCOVER MORE
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {discover.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
}
