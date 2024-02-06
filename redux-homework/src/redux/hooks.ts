import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { ProjectsActions } from "./actions";
import { RootState } from "./store";

export const useAppDispatch = useDispatch<Dispatch<ProjectsActions>>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector