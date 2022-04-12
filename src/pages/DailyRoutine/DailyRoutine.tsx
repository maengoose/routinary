import Input from "./Input"

function List() {
  return null
}

const DailyRoutine: React.VFC = () => {
  function onClick() {
    //Todo: 할 일 추가 
  }
  return (
    <div>
      <h1>
       Make your routine
      </h1>
      <Input onClick={onClick}/>
      <List />
    </div>
  )
}

export default DailyRoutine;
