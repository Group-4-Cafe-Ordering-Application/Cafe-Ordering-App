import { Helmet } from "react-helmet";

export default function NoPage() {
  return (
    <>
      <Helmet>
        <title>Error - Not Found</title>
      </Helmet>
      <h1> Error 404: Page Not Found</h1>
    </>
  );
}
