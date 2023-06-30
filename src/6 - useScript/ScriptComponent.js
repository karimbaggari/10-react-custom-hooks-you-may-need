import useScript from "./useScript";

export default function ScriptComponent() {
  const { loading, error } = useScript(
    "https://code.jquery.com/jquery-3.6.0.min.js"
  );
  if (loading) <div>Loading</div>;
  if (error) <div>Error</div>;
  return <div>{window.$(window).width}</div>;
}
