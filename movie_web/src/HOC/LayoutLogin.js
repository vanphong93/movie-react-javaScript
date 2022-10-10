import HeaderPage from "../Page/HeaderPage";

export default function LayoutLogin({ Component }) {
  return (
    <div>
      <HeaderPage />
      <Component />
    </div>
  );
}
