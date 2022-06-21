import Button from "~/components/Button";

function MenuItem({ data, onClick }) {
  return (
    <>
      <Button
        line={data.line}
        leftIcon={data.icon}
        to={data.to}
        onClick={onClick}
      >
        {data.title}
      </Button>
    </>
  );
}

export default MenuItem;
