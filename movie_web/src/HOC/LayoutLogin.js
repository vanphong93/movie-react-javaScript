import HeaderPage from "../PagesAdmin/HeaderPage/HeaderPage";

export default function LayoutLogin({ Component }) {
  return (
    <div>
      <HeaderPage />
      <Component />
    </div>
  );
}
