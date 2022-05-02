import { GetServerSideProps } from "next";
import { IndexBookInformation } from "../../components/IndexBookInformation";
import { data } from "../../services/data";

export default function Home() {
  return (
    <>
      <IndexBookInformation/>
    </>
  )
}

