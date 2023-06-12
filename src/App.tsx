import React from "react";
import { Route, Routes } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import TodoInput from "./components/TodoInput";
import TodoFooter from "./components/TodoFooter";
import AllTodo from "./routes/AllTodo";
import ActiveTodo from "./routes/ActiveTodo";
import CompletedTodo from "./routes/CompletedTodo";

const App: React.FC = () => {
  const [openTodos, setOpenTodos] = React.useState<boolean>(false);

  const openTodosAndClose = () => {
    setOpenTodos(!openTodos);
  };

  return (
    <div className="App">
      <h1>TODOS</h1>
      <div className="wrapper">
        <TodoInput openTodos={openTodos} openTodosAndClose={openTodosAndClose} />
        <div className="todos">
          <AnimatePresence>
            {openTodos && (
              <motion.div
                initial={{
                  height: 0,
                }}
                animate={{
                  height: "auto",
                }}
                exit={{
                  height: 0,
                }}
                transition={{
                  easings: "ease-in-out",
                }}
              >
                <Routes>
                  <Route path="/" element={<AllTodo />} />
                  <Route path="/active" element={<ActiveTodo />} />
                  <Route path="/done" element={<CompletedTodo />} />
                </Routes>
                <TodoFooter />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default App;
