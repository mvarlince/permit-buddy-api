import armMachineLearning from "@azure/arm-machinelearning";
import { AzureMachineLearningWorkspaces } from "@azure/arm-machinelearning";
import {DefaultAzureCredential} from "@azure/identity";
import { workspaceInfo } from "./secret.js";

const client = new AzureMachineLearningWorkspaces(new DefaultAzureCredential(), workspaceInfo.subscriptionId);
console.log(client)

const workspace = await client.workspace.get(workspaceInfo.resourceGroup , workspaceInfo.workspaceName);

const input = {
    "Inputs": {
      "data": [
        {
          "PermitIssuedDate": "2022/08/23 04:00:00+00",
          "ApplicationDate": "2022/08/23 04:00:00+00",
          "PermitNumber": 2022074946,
          "ProcessNumber": "C2022170862",
          "MasterPermitNumber": 0,
          "PermitType": "MECH",
          "ResidentialCommercial": "C",
          "EstimatedValue": "9600",
          "ApplicationTypeCode": 8,
          "ApplicationTypeDescription": "repair",
          "ProposedUseCode": 520,
          "ProposedUseDescription": "5 UNITS OR MORE  - RESIDENTIAL",
          "DetailDescriptionComments": "REPLACE EQUIPMENT",
          "FolioNumber": "3.04004E+12",
          "OwnerName": "PARK EAST CONDO/LOURDES KRAUSE",
          "LegalDescription1": "PARK EAST CONDO",
          "LegalDescription2": "FONTAINEBLEAU PARK SUB SEC 8",
          "PropertyAddress": "10 NW 87 AVE",
          "ArchitectName": "NOT LISTED",
          "ContractorNumber": "CAC1818193",
          "ContractorName": "AIR COOLING POWER INC",
          "ContractorAddress": "2655 NW 115 ST",
          "ContractorCity": "MIAMI",
          "ContractorState": "FL",
          "ContractorZip": 33167,
          "ContractorPhone": "(786)975-3627",
          "SquareFootage": 0,
          "StructureUnits": 5,
          "StructureFloors": 2,
          "Category1": 50,
          "CategoryDescription1": "RAISE EXISTING ROOF MOUNTED EQUIP",
          "LastInspectionDate": "10/7/2022",
          "LastApprovedInspDate": "10/7/2022",
          "CoCcDate": "NULL",
          "PermitTotalFee": 193.31,
          "Filler": "NULL",
          "City": "MIAMI",
          "State": "FL"
        }
      ]
    },
    "GlobalParameters": {
      "method": "predict"
    }
  }

const inputData = {data: input};

const result = await client.endpoints.invoke(workspace.id, "permit-endpoint-2", inputData);
console.log(result);