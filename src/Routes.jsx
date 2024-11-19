import React from "react";
import { useRoutes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import EmotionDetection from "./pages/EmotionDetection";
import TextSummarization from "./pages/TextSummarization";
import NotFoundPage from "./pages/404";
import Docs from "./pages/Docs";
import TrainModels from "./pages/TrainModels";

const ProjectRoutes = () => {
    let routes = useRoutes([
        {
            path: "",
            element: (
                <HomePage />
            ),
        },
        {
            path: "emotion-detection",
            element: (
                <EmotionDetection />
            ),
        },
        {
            path: "text-summarization",
            element: (
                <TextSummarization />
            ),
        },
        {
            path: "docs",
            element: (
                <Docs />
            ),
        },
        {
            path: "trainmodels",
            element: (
                <TrainModels />
            ),
        },
        {
            path: "*",
            element: (
                <NotFoundPage />
            )
        }
    ]);

    return routes;
}

export default ProjectRoutes;