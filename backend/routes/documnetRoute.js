const express = require("express");
const {
  createDocument,
  getAllDocument,
  updateDocument,
  deleteDocument,
  getDocument,
  createFilterObject,
} = require("../services/documentServices.js");

const {
  getDocumentValidator,
  createDocumentValidator,
  updateDocumentValidator,
  deleteDocumentValidator,
} = require("../utils/validators/documentValidator.js");

const { uploadDocumentFile, saveDocumentFile } = require("../utils/images.js");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(createFilterObject, getAllDocument)
  .post(
    uploadDocumentFile,
    saveDocumentFile,
    createDocumentValidator,
    createDocument
  );

router
  .route("/:id")
  .get(getDocumentValidator, getDocument)
  .put(updateDocumentValidator, updateDocument)
  .delete(deleteDocumentValidator, deleteDocument);

module.exports = router;
