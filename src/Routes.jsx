import React from "react";
import { useRoutes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import EmotionDetection from "./pages/EmotionDetection";
import TextSummarization from "./pages/TextSummarization";
import TextCategorization from "./pages/TextCategorization";
import KeywordExtraction from "./pages/KeywordExtraction";
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
            path: "text-categorization",
            element: (
                <TextCategorization />
            ),
        },
        {
            path: "keyword-extraction",
            element: (
                <KeywordExtraction />
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