import CreateItem from "./component/createItem/CreateItem";
import TodoList from "./component/todoList/List";
import DoneList from "./component/doneList/List";

export default function Home() {
  return (
    <div className="w-full deskTop:px-[360px] px-[120px] py-6 flex flex-col gap-10">
      {/* 입력창 */}
      <CreateItem />
      {/* 목록 리스트 */}
      <div className="w-full deskTop:flex deskTop:gap-6">
        {/* TO DO list */}
        <TodoList />
        {/* DONE list */}
        <DoneList />
      </div>
    </div>
  );
}
