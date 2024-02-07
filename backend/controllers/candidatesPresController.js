import apiHandler from "../utils/apiHandler.js";
import Candidates from "../models/candidatesPresModel.js";

const candidatesPresController = {
  createBulkCandidates: async (req, res) => {
    try {
      const candidates = req.body;
      const createdCandidates = await Candidates.insertMany(candidates);
      return apiHandler({
        res,
        status: "success",
        code: 201,
        message: "All candidates created successfully",
        data: createdCandidates,
        error: null,
      });
    } catch (error) {
      return apiHandler({
        res,
        status: "error",
        code: 500,
        message: "Internal Server Error",
        error: { type: "InternalServerError", details: error.message },
      });
    }
  },
  createCandidate: async (req, res) => {
    try {
      const { paslonNumber, capresDetail, cawapresDetail } = req.body;
      const newCandidate = new Candidates({
        paslonNumber,
        capresDetail,
        cawapresDetail,
      });
      const createdCandidate = await newCandidate.save();
      return apiHandler({
        res,
        status: "success",
        code: 201,
        message: "Candidate created successfully",
        data: createdCandidate,
        error: null,
      });
    } catch (error) {
      return apiHandler({
        res,
        status: "error",
        code: 500,
        message: "Internal Server Error",
        error: { type: "InternalServerError", details: error.message },
      });
    }
  },
  getAllCandidates: async (req, res) => {
    try {
      const allCandidates = await Candidates.find();
      return apiHandler({
        res,
        status: "success",
        code: 200,
        message: "All candidates retrieved successfully",
        data: allCandidates,
        error: null,
      });
    } catch (error) {
      return apiHandler({
        res,
        status: "error",
        code: 500,
        message: "Internal Server Error",
        error: { type: "InternalServerError", details: error.message },
      });
    }
  },
  deleteCandidate: async (req, res) => {
    try {
      const candidateId = req.params;
      const deletedCandidate = await Candidates.deleteOne({
        _id: candidateId,
      });
      return apiHandler({
        res,
        status: "success",
        code: 204,
        message: "Candidate deleted successfully",
        data: deletedCandidate,
        error: null,
      });
    } catch (error) {
      return apiHandler({
        res,
        status: "error",
        code: 500,
        message: "Internal Server Error",
        error: { type: "InternalServerError", details: error.message },
      });
    }
  },
};

export default candidatesPresController;
