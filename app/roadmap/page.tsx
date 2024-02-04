import { TodoItem } from "./TodoItem";

export default function Roadmap() {
  return (
    <div className="h-full flex flex-col items-center justify-center px-8">
      <div className="flex flex-col gap-16 w-full sm:w-[400px]">
        <section className="flex flex-col gap-2">
          <h1 className="text-2xl">Roadmap</h1>

          <hr className="mb-4" />

          <TodoItem checked>
            Find emoji database/lib (went with <code>node-emoji</code>)
          </TodoItem>

          <TodoItem>Add toggle-able emoji picker component</TodoItem>

          <TodoItem>Add lazy loading</TodoItem>

          <TodoItem>Add viewport virtualization</TodoItem>

          <TodoItem>
            Add guide for setting up in any project (a-la-shadcn)
          </TodoItem>

          <TodoItem>Add emoji groupings (e.g. smileys, animals, etc.)</TodoItem>

          <TodoItem>Add search</TodoItem>

          <TodoItem>Add recent emojis</TodoItem>
        </section>
      </div>
    </div>
  );
}
