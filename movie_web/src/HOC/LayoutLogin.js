import HeaderPage from "../Page/HeaderPage/HeaderPage";

export default function LayoutLogin({ Component }) {
  return (
    <div>
      <HeaderPage />
      <Component />
    </div>
  );
}
