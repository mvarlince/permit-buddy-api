import fetch from 'node-fetch';
import { key } from "./secret.js";

export function getForm2(req, res) {

  let formInput = req.body

  let input = {
    Inputs: {
      data: [
        {
          PermitIssuedDate: "2022/08/23 04:00:00+00",
          ApplicationDate: "2022/08/23 04:00:00+00",
          PermitNumber: 2022074946,
          ProcessNumber: "C2022170862",
          MasterPermitNumber: 0,
          PermitType: "MECH",
          ResidentialCommercial: "C",
          EstimatedValue: "9600",
          ApplicationTypeCode: 8,
          ApplicationTypeDescription: "repair",
          ProposedUseCode: 520,
          ProposedUseDescription: "5 UNITS OR MORE  - RESIDENTIAL",
          DetailDescriptionComments: "REPLACE EQUIPMENT",
          FolioNumber: "3.04004E+12",
          OwnerName: "PARK EAST CONDO/LOURDES KRAUSE",
          LegalDescription1: "PARK EAST CONDO",
          LegalDescription2: "FONTAINEBLEAU PARK SUB SEC 8",
          PropertyAddress: "10 NW 87 AVE",
          ArchitectName: "NOT LISTED",
          ContractorNumber: "CAC1818193",
          ContractorName: "AIR COOLING POWER INC",
          ContractorAddress: "2655 NW 115 ST",
          ContractorCity: "MIAMI",
          ContractorState: "FL",
          ContractorZip: 33167,
          ContractorPhone: "(786)975-3627",
          SquareFootage: 0,
          StructureUnits: 5,
          StructureFloors: 2,
          Category1: 50,
          CategoryDescription1: "RAISE EXISTING ROOF MOUNTED EQUIP",
          LastInspectionDate: "10/7/2022",
          LastApprovedInspDate: "10/7/2022",
          CoCcDate: "NULL",
          PermitTotalFee: 193.31,
          Filler: "NULL",
          City: "MIAMI",
          State: "FL",
        },
      ],
    },
    GlobalParameters: {
      method: "predict",
    },
  };


  fetch("https://permit-endpoint-2.eastus2.inference.ml.azure.com/score", {
    method: "POST",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${key}`,
      "azureml-model-deployment": "automlb7973534614-1",
    },
    body: JSON.stringify(input),
  })
    .then((response) => response.json())
    .then((data) => res.send(data));
}

// console.log(input)
// console.log(data)