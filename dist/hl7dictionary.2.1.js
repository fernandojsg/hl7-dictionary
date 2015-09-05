(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.hl7dictionary_v2_1 = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var fields = {
    "AD": {
        "desc": "Address",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Street Address",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Other Designation",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "City",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "State Or Province",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Zip",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Country",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CE": {
        "desc": "Coded Element",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Name Of Coding System",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Alternate Identifier",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Alternate Text",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Name Of Alternate Coding System",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CK": {
        "desc": "Composite ID With Check Digit",
        "subfields": [
            {
                "datatype": "NM",
                "desc": "ID Number",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Check Digit",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Code Identifying Check Digit Scheme Employed",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CM": {
        "desc": "Composite",
        "subfields": []
    },
    "CM_MSG": {
        "desc": "Message Type",
        "subfields": [
            {
                "datatype": "ID",
                "desc": "Message Type",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ID",
                "desc": "Trigger Event",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CN": {
        "desc": "Composite ID Number And Name",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "ID",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Family Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Given Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Middle Initial Or Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Degree",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "CQ": {
        "desc": "Composite Quantity With Units",
        "subfields": [
            {
                "datatype": "NM",
                "desc": "Quantity",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Units",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "DT": {
        "desc": "Date",
        "subfields": []
    },
    "FT": {
        "desc": "Formatted Text Data",
        "subfields": []
    },
    "ID": {
        "desc": "Coded values for HL7 tables",
        "subfields": []
    },
    "IS": {
        "desc": "Coded value for user-defined tables",
        "subfields": []
    },
    "NM": {
        "desc": "Numeric",
        "subfields": []
    },
    "PN": {
        "desc": "Person Name",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Family Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Given Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Middle Initial Or Name",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Suffix",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Prefix",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Degree",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "SI": {
        "desc": "SET ID",
        "subfields": []
    },
    "ST": {
        "desc": "String Data",
        "subfields": []
    },
    "TN": {
        "desc": "Telephone Number",
        "subfields": []
    },
    "TS": {
        "desc": "Time Stamp",
        "subfields": [
            {
                "datatype": "ST",
                "desc": "Time Of An Event",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Degree Of Precision",
                "opt": 1,
                "rep": 1
            }
        ]
    },
    "TX": {
        "desc": "Text Data",
        "subfields": []
    },
    "VARIES": {
        "desc": "Variable Datatype",
        "subfields": []
    }
};

module.exports = fields;

},{}],2:[function(require,module,exports){
module.exports = {
	'fields': require('./fields'),
	'segments': require('./segments'),
	'messages': require('./messages')
};

},{"./fields":1,"./messages":3,"./segments":4}],3:[function(require,module,exports){
var messages = {
    "ACK": {
        "desc": "General acknowledgment message",
        "name": "ACK",
        "segments": {
            "desc": "General acknowledgment message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "Message acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "ERR",
                    "desc": "Error",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ADR_A19": {
        "desc": "Patient query",
        "name": "ADR_A19",
        "segments": {
            "desc": "Patient query",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "Message acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QUERY_RESPONSE",
                    "desc": "Query response",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "EVN",
                            "desc": "Event type",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "PID",
                            "desc": "Patient identification",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PV1",
                            "desc": "Patient visit",
                            "min": 1,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "DSC",
                    "desc": "Continuation pointer",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A01": {
        "desc": "Admit/visit notification",
        "name": "ADT_A01",
        "segments": {
            "desc": "Admit/visit notification",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A02": {
        "desc": "Transfer a patient",
        "name": "ADT_A02",
        "segments": {
            "desc": "Transfer a patient",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A03": {
        "desc": "Discharge/end visit",
        "name": "ADT_A03",
        "segments": {
            "desc": "Discharge/end visit",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A04": {
        "desc": "Register a patient",
        "name": "ADT_A04",
        "segments": {
            "desc": "Register a patient",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A05": {
        "desc": "Pre-admit a patient",
        "name": "ADT_A05",
        "segments": {
            "desc": "Pre-admit a patient",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A06": {
        "desc": "Change an outpatient to an inpatient",
        "name": "ADT_A06",
        "segments": {
            "desc": "Change an outpatient to an inpatient",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A07": {
        "desc": "Change an inpatient to an outpatient",
        "name": "ADT_A07",
        "segments": {
            "desc": "Change an inpatient to an outpatient",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A08": {
        "desc": "Update patient information",
        "name": "ADT_A08",
        "segments": {
            "desc": "Update patient information",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NK1",
                    "desc": "Next of kin",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A09": {
        "desc": "Patient departing - tracking",
        "name": "ADT_A09",
        "segments": {
            "desc": "Patient departing - tracking",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A10": {
        "desc": "Patient arriving - tracking",
        "name": "ADT_A10",
        "segments": {
            "desc": "Patient arriving - tracking",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A11": {
        "desc": "Cancel admit/visit notification",
        "name": "ADT_A11",
        "segments": {
            "desc": "Cancel admit/visit notification",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A12": {
        "desc": "Cancel transfer",
        "name": "ADT_A12",
        "segments": {
            "desc": "Cancel transfer",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A13": {
        "desc": "Cancel discharge/end visit",
        "name": "ADT_A13",
        "segments": {
            "desc": "Cancel discharge/end visit",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A15": {
        "desc": "Pending transfer",
        "name": "ADT_A15",
        "segments": {
            "desc": "Pending transfer",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A16": {
        "desc": "Pending discharge",
        "name": "ADT_A16",
        "segments": {
            "desc": "Pending discharge",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "DG1",
                    "desc": "Diagnosis",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A17": {
        "desc": "Swap patients",
        "name": "ADT_A17",
        "segments": {
            "desc": "Swap patients",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PATIENT",
                    "desc": "Patient",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "PID",
                            "desc": "Patient identification",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PV1",
                            "desc": "Patient visit",
                            "min": 1,
                            "max": 1
                        }
                    ]
                }
            ]
        }
    },
    "ADT_A18": {
        "desc": "Merge patient information",
        "name": "ADT_A18",
        "segments": {
            "desc": "Merge patient information",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MRG",
                    "desc": "Merge patient information",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A20": {
        "desc": "Bed status update",
        "name": "ADT_A20",
        "segments": {
            "desc": "Bed status update",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NPU",
                    "desc": "Non-patient update",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A21": {
        "desc": "Patient goes on a \"leave of absence\"",
        "name": "ADT_A21",
        "segments": {
            "desc": "Patient goes on a \"leave of absence\"",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A22": {
        "desc": "Patient returns from a \"leave of absence\"",
        "name": "ADT_A22",
        "segments": {
            "desc": "Patient returns from a \"leave of absence\"",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A23": {
        "desc": "Delete a patient record",
        "name": "ADT_A23",
        "segments": {
            "desc": "Delete a patient record",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "ADT_A24": {
        "desc": "Link patient information",
        "name": "ADT_A24",
        "segments": {
            "desc": "Link patient information",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "BAR_P01": {
        "desc": "Add patient accounts",
        "name": "BAR_P01",
        "segments": {
            "desc": "Add patient accounts",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "VISIT",
                    "desc": "Visit",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "PV1",
                            "desc": "Patient visit",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "DG1",
                            "desc": "Diagnosis",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "PR1",
                            "desc": "Procedures",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "GT1",
                            "desc": "Guarantor",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "NK1",
                            "desc": "Next of kin",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "IN1",
                            "desc": "Insurance",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "ACC",
                            "desc": "Accident",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "UB1",
                            "desc": "Ub82 data",
                            "min": 0,
                            "max": 1
                        }
                    ]
                }
            ]
        }
    },
    "BAR_P02": {
        "desc": "Purge patient accounts",
        "name": "BAR_P02",
        "segments": {
            "desc": "Purge patient accounts",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PATIENT",
                    "desc": "Patient",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "PID",
                            "desc": "Patient identification",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "PV1",
                            "desc": "Patient visit",
                            "min": 0,
                            "max": 1
                        }
                    ]
                }
            ]
        }
    },
    "DFT_P03": {
        "desc": "Post detail financial transaction",
        "name": "DFT_P03",
        "segments": {
            "desc": "Post detail financial transaction",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "EVN",
                    "desc": "Event type",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PID",
                    "desc": "Patient identification",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PV1",
                    "desc": "Patient visit",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "FT1",
                    "desc": "Financial transaction",
                    "min": 0,
                    "max": 0
                }
            ]
        }
    },
    "DSR_Q01": {
        "desc": "Display response message",
        "name": "DSR_Q01",
        "segments": {
            "desc": "Display response message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "Message acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Query filter",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DSP",
                    "desc": "Display data",
                    "min": 1,
                    "max": 0
                },
                {
                    "name": "DSC",
                    "desc": "Continuation pointer",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "DSR_Q03": {
        "desc": "Deferred response to a query",
        "name": "DSR_Q03",
        "segments": {
            "desc": "Deferred response to a query",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Query filter",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DSP",
                    "desc": "Display data",
                    "min": 1,
                    "max": 0
                },
                {
                    "name": "DSC",
                    "desc": "Continuation pointer",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "MCF_Q02": {
        "desc": "Delayed acknowledgment",
        "name": "MCF_Q02",
        "segments": {
            "desc": "Delayed acknowledgment",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "Message acknowledgment",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "ORM_O01": {
        "desc": "Order message",
        "name": "ORM_O01",
        "segments": {
            "desc": "Order message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "Notes and comments",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PATIENT",
                    "desc": "Patient",
                    "min": 0,
                    "max": 1,
                    "children": [
                        {
                            "name": "PID",
                            "desc": "Patient identification",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "NTE",
                            "desc": "Notes and comments",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "PV1",
                            "desc": "Patient visit",
                            "min": 0,
                            "max": 1
                        }
                    ]
                },
                {
                    "name": "ORDER",
                    "desc": "Order",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "ORC",
                            "desc": "Common order",
                            "min": 1,
                            "max": 1
                        },
                        {
                            "name": "ORDER_DETAIL",
                            "desc": "Order detail",
                            "min": 0,
                            "max": 1,
                            "children": [
                                {
                                    "name": "OBR,ORO,RX1",
                                    "desc": "Details",
                                    "min": 0,
                                    "max": 0,
                                    "compounds": [
                                        {
                                            "name": "OBR",
                                            "desc": "Observation request",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "ORO",
                                            "desc": "Order other",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RX1",
                                            "desc": "Pharmacy order",
                                            "min": 1,
                                            "max": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and comments",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "OBSERVATION",
                                    "desc": "Observation",
                                    "min": 0,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "OBX",
                                            "desc": "Observation/Result",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "Notes and Comments (for Results)",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "BLG",
                            "desc": "Billing",
                            "min": 0,
                            "max": 1
                        }
                    ]
                }
            ]
        }
    },
    "ORR_O02": {
        "desc": "Order response",
        "name": "ORR_O02",
        "segments": {
            "desc": "Order response",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "MSA",
                    "desc": "Message acknowledgment",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "NTE",
                    "desc": "Notes and comments",
                    "min": 0,
                    "max": 0
                },
                {
                    "name": "PATIENT",
                    "desc": "Patient",
                    "min": 0,
                    "max": 1,
                    "children": [
                        {
                            "name": "PID",
                            "desc": "Patient identification",
                            "min": 0,
                            "max": 1
                        },
                        {
                            "name": "NTE",
                            "desc": "Notes and comments",
                            "min": 0,
                            "max": 0
                        },
                        {
                            "name": "ORDER",
                            "desc": "Order",
                            "min": 1,
                            "max": 0,
                            "children": [
                                {
                                    "name": "ORC",
                                    "desc": "Common order",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "OBR,ORO,RX1",
                                    "desc": "Details",
                                    "min": 0,
                                    "max": 0,
                                    "compounds": [
                                        {
                                            "name": "OBR",
                                            "desc": "Observation request",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "ORO",
                                            "desc": "Order other",
                                            "min": 1,
                                            "max": 1
                                        },
                                        {
                                            "name": "RX1",
                                            "desc": "Pharmacy order",
                                            "min": 1,
                                            "max": 1
                                        }
                                    ]
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and comments",
                                    "min": 0,
                                    "max": 0
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "ORU": {
        "desc": "Unsolicited transmission of an observation message",
        "name": "ORU",
        "segments": {
            "desc": "Unsolicited transmission of an observation message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PATIENT_RESULT",
                    "desc": "Patient result",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "PATIENT",
                            "desc": "Patient",
                            "min": 0,
                            "max": 1,
                            "children": [
                                {
                                    "name": "PID",
                                    "desc": "Patient identification",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and comments",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "PV1",
                                    "desc": "Patient visit",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        },
                        {
                            "name": "ORDER_OBSERVATION",
                            "desc": "Order observation",
                            "min": 1,
                            "max": 0,
                            "children": [
                                {
                                    "name": "ORC",
                                    "desc": "Common order",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "OBR",
                                    "desc": "Observation request",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and comments",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "OBSERVATION",
                                    "desc": "Observation",
                                    "min": 1,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "OBX",
                                            "desc": "Result",
                                            "min": 0,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "Notes and comments",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "DSC",
                    "desc": "Continuation pointer",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ORU_R01": {
        "desc": "Unsolicited transmission of an observation message",
        "name": "ORU_R01",
        "segments": {
            "desc": "Unsolicited transmission of an observation message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PATIENT_RESULT",
                    "desc": "Patient result",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "PATIENT",
                            "desc": "Patient",
                            "min": 0,
                            "max": 1,
                            "children": [
                                {
                                    "name": "PID",
                                    "desc": "Patient identification",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and comments",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "PV1",
                                    "desc": "Patient visit",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        },
                        {
                            "name": "ORDER_OBSERVATION",
                            "desc": "Order observation",
                            "min": 1,
                            "max": 0,
                            "children": [
                                {
                                    "name": "ORC",
                                    "desc": "Common order",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "OBR",
                                    "desc": "Observation request",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and comments",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "OBSERVATION",
                                    "desc": "Observation",
                                    "min": 1,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "OBX",
                                            "desc": "Result",
                                            "min": 0,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "Notes and comments",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "DSC",
                    "desc": "Continuation pointer",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "ORU_R03": {
        "desc": "Unsolicited observation message",
        "name": "ORU_R03",
        "segments": {
            "desc": "Unsolicited observation message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "PATIENT_RESULT",
                    "desc": "Patient result",
                    "min": 1,
                    "max": 0,
                    "children": [
                        {
                            "name": "PATIENT",
                            "desc": "Patient",
                            "min": 0,
                            "max": 1,
                            "children": [
                                {
                                    "name": "PID",
                                    "desc": "Patient identification",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and comments",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "PV1",
                                    "desc": "Patient visit",
                                    "min": 0,
                                    "max": 1
                                }
                            ]
                        },
                        {
                            "name": "ORDER_OBSERVATION",
                            "desc": "Order observation",
                            "min": 1,
                            "max": 0,
                            "children": [
                                {
                                    "name": "ORC",
                                    "desc": "Common order",
                                    "min": 0,
                                    "max": 1
                                },
                                {
                                    "name": "OBR",
                                    "desc": "Observation request",
                                    "min": 1,
                                    "max": 1
                                },
                                {
                                    "name": "NTE",
                                    "desc": "Notes and comments",
                                    "min": 0,
                                    "max": 0
                                },
                                {
                                    "name": "OBSERVATION",
                                    "desc": "Observation",
                                    "min": 1,
                                    "max": 0,
                                    "children": [
                                        {
                                            "name": "OBX",
                                            "desc": "Result",
                                            "min": 0,
                                            "max": 1
                                        },
                                        {
                                            "name": "NTE",
                                            "desc": "Notes and comments",
                                            "min": 0,
                                            "max": 0
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "DSC",
                    "desc": "Continuation pointer",
                    "min": 0,
                    "max": 1
                }
            ]
        }
    },
    "QRY_A19": {
        "desc": "Patient query",
        "name": "QRY_A19",
        "segments": {
            "desc": "Patient query",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Query definition",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "QRY_Q01": {
        "desc": "Query sent for immediate response",
        "name": "QRY_Q01",
        "segments": {
            "desc": "Query sent for immediate response",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Query filter",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DSC",
                    "desc": "Continuation pointer",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "QRY_Q02": {
        "desc": "Query sent for deferred response",
        "name": "QRY_Q02",
        "segments": {
            "desc": "Query sent for deferred response",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRD",
                    "desc": "Query definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "QRF",
                    "desc": "Query filter",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DSC",
                    "desc": "Continuation pointer",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    },
    "UDM_Q05": {
        "desc": "Unsolicited display update message",
        "name": "UDM_Q05",
        "segments": {
            "desc": "Unsolicited display update message",
            "segments": [
                {
                    "name": "MSH",
                    "desc": "Message header",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "URD",
                    "desc": "Results/update definition",
                    "min": 1,
                    "max": 1
                },
                {
                    "name": "URS",
                    "desc": "Unsolicited selection",
                    "min": 0,
                    "max": 1
                },
                {
                    "name": "DSP",
                    "desc": "Display data",
                    "min": 1,
                    "max": 0
                },
                {
                    "name": "DSC",
                    "desc": "Continuation pointer",
                    "min": 1,
                    "max": 1
                }
            ]
        }
    }
};

module.exports = messages;

},{}],4:[function(require,module,exports){
var segments = {
    "ACC": {
        "desc": "Accident",
        "fields": [
            {
                "datatype": "TS",
                "desc": "Accident date/time",
                "opt": 1,
                "rep": 1,
                "len": 19
            },
            {
                "datatype": "ID",
                "desc": "Accident code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 50
            },
            {
                "datatype": "ST",
                "desc": "Accident location",
                "opt": 1,
                "rep": 1,
                "len": 25
            }
        ]
    },
    "ADD": {
        "desc": "Addendum",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Addendum continuation pointer",
                "opt": 1,
                "rep": 1,
                "len": 60
            }
        ]
    },
    "BHS": {
        "desc": "Batch header",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Batch field separator",
                "opt": 2,
                "rep": 1,
                "len": 1
            },
            {
                "datatype": "ST",
                "desc": "Batch encoding characters",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ST",
                "desc": "Batch sending application",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "ST",
                "desc": "Batch sending facility",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Batch receiving application",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "ST",
                "desc": "Batch receiving facility",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "TS",
                "desc": "Batch creation date/time",
                "opt": 1,
                "rep": 1,
                "len": 19
            },
            {
                "datatype": "ST",
                "desc": "Batch security",
                "opt": 1,
                "rep": 1,
                "len": 40
            },
            {
                "datatype": "ST",
                "desc": "Batch name/id/type",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Batch comment",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "ST",
                "desc": "Batch control id",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Reference batch control id",
                "opt": 1,
                "rep": 1,
                "len": 20
            }
        ]
    },
    "BLG": {
        "desc": "Billing",
        "fields": [
            {
                "datatype": "CM",
                "desc": "When to charge",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "ID",
                "desc": "Charge type",
                "opt": 1,
                "rep": 1,
                "len": 50,
                "table": 122
            },
            {
                "datatype": "CM",
                "desc": "Account id",
                "opt": 1,
                "rep": 1,
                "len": 100
            }
        ]
    },
    "BTS": {
        "desc": "Batch trailer",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Batch message count",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "ST",
                "desc": "Batch comment",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "CM",
                "desc": "Batch totals",
                "opt": 1,
                "rep": 1,
                "len": 100
            }
        ]
    },
    "DG1": {
        "desc": "Diagnosis",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set id - diagnosis",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ID",
                "desc": "Diagnosis coding method",
                "opt": 2,
                "rep": 1,
                "len": 2,
                "table": 53
            },
            {
                "datatype": "ID",
                "desc": "Diagnosis code",
                "opt": 1,
                "rep": 1,
                "len": 8,
                "table": 51
            },
            {
                "datatype": "ST",
                "desc": "Diagnosis description",
                "opt": 1,
                "rep": 1,
                "len": 40
            },
            {
                "datatype": "TS",
                "desc": "Diagnosis date/time",
                "opt": 1,
                "rep": 1,
                "len": 19
            },
            {
                "datatype": "ID",
                "desc": "Diagnosis/drg type",
                "opt": 2,
                "rep": 1,
                "len": 2,
                "table": 52
            },
            {
                "datatype": "ST",
                "desc": "Major diagnostic category",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ID",
                "desc": "Diagnostic related group",
                "opt": 1,
                "rep": 1,
                "len": 4,
                "table": 55
            },
            {
                "datatype": "ID",
                "desc": "Drg approval indicator",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "ID",
                "desc": "Drg grouper review code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 56
            },
            {
                "datatype": "ID",
                "desc": "Outlier type",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 83
            },
            {
                "datatype": "NM",
                "desc": "Outlier days",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "NM",
                "desc": "Outlier cost",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "ST",
                "desc": "Grouper version and type",
                "opt": 1,
                "rep": 1,
                "len": 4
            }
        ]
    },
    "DSC": {
        "desc": "Continuation pointer",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Continuation pointer",
                "opt": 1,
                "rep": 1,
                "len": 60
            }
        ]
    },
    "DSP": {
        "desc": "Display data",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set id - display data",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "SI",
                "desc": "Display level",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "TX",
                "desc": "Data line",
                "opt": 2,
                "rep": 1,
                "len": 300
            },
            {
                "datatype": "ST",
                "desc": "Logical break point",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "TX",
                "desc": "Result id",
                "opt": 1,
                "rep": 1,
                "len": 20
            }
        ]
    },
    "ERR": {
        "desc": "Error",
        "fields": [
            {
                "datatype": "ID",
                "desc": "Error code and location",
                "opt": 2,
                "rep": 0,
                "len": 80,
                "table": 60
            }
        ]
    },
    "EVN": {
        "desc": "Event type",
        "fields": [
            {
                "datatype": "ID",
                "desc": "Event type code",
                "opt": 2,
                "rep": 1,
                "len": 3,
                "table": 3
            },
            {
                "datatype": "TS",
                "desc": "Date/time of event",
                "opt": 2,
                "rep": 1,
                "len": 19
            },
            {
                "datatype": "TS",
                "desc": "Date/time planned event",
                "opt": 1,
                "rep": 1,
                "len": 19
            },
            {
                "datatype": "ID",
                "desc": "Event reason code",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 62
            }
        ]
    },
    "FHS": {
        "desc": "File header",
        "fields": [
            {
                "datatype": "ST",
                "desc": "File field separator",
                "opt": 2,
                "rep": 1,
                "len": 1
            },
            {
                "datatype": "ST",
                "desc": "File encoding characters",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ST",
                "desc": "File sending application",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "ST",
                "desc": "File sending facility",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "File receiving application",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "ST",
                "desc": "File receiving facility",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "TS",
                "desc": "Date/time of file creation",
                "opt": 1,
                "rep": 1,
                "len": 19
            },
            {
                "datatype": "ST",
                "desc": "File security",
                "opt": 1,
                "rep": 1,
                "len": 40
            },
            {
                "datatype": "ST",
                "desc": "File name/id",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "File header comment",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "ST",
                "desc": "File control id",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Reference file control id",
                "opt": 1,
                "rep": 1,
                "len": 20
            }
        ]
    },
    "FT1": {
        "desc": "Financial transaction",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set id - financial transaction",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ST",
                "desc": "Transaction id",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "ST",
                "desc": "Transaction batch id",
                "opt": 1,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "DT",
                "desc": "Transaction date",
                "opt": 2,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Transaction posting date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ID",
                "desc": "Transaction type",
                "opt": 2,
                "rep": 1,
                "len": 8,
                "table": 17
            },
            {
                "datatype": "ID",
                "desc": "Transaction code",
                "opt": 2,
                "rep": 1,
                "len": 20,
                "table": 96
            },
            {
                "datatype": "ST",
                "desc": "Transaction description",
                "opt": 1,
                "rep": 1,
                "len": 40
            },
            {
                "datatype": "ST",
                "desc": "Transaction description - alt",
                "opt": 1,
                "rep": 1,
                "len": 40
            },
            {
                "datatype": "NM",
                "desc": "Transaction amount - extended",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "NM",
                "desc": "Transaction quantity",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "NM",
                "desc": "Transaction amount - unit",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "ST",
                "desc": "Department code",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "ID",
                "desc": "Insurance plan id",
                "opt": 1,
                "rep": 1,
                "len": 8,
                "table": 72
            },
            {
                "datatype": "NM",
                "desc": "Insurance amount",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "ST",
                "desc": "Patient location",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "ID",
                "desc": "Fee schedule",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 24
            },
            {
                "datatype": "ID",
                "desc": "Patient type",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 18
            },
            {
                "datatype": "ID",
                "desc": "Diagnosis code",
                "opt": 1,
                "rep": 1,
                "len": 8,
                "table": 51
            },
            {
                "datatype": "CN",
                "desc": "Performed by code",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CN",
                "desc": "Ordered by code",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "NM",
                "desc": "Unit cost",
                "opt": 1,
                "rep": 1,
                "len": 12
            }
        ]
    },
    "FTS": {
        "desc": "File trailer",
        "fields": [
            {
                "datatype": "ST",
                "desc": "File batch count",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "ST",
                "desc": "File trailer comment",
                "opt": 1,
                "rep": 1,
                "len": 80
            }
        ]
    },
    "GT1": {
        "desc": "Guarantor",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set id - guarantor",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ID",
                "desc": "Guarantor number",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "PN",
                "desc": "Guarantor name",
                "opt": 2,
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "PN",
                "desc": "Guarantor spouse name",
                "opt": 1,
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "AD",
                "desc": "Guarantor address",
                "opt": 1,
                "rep": 1,
                "len": 106
            },
            {
                "datatype": "TN",
                "desc": "Guarantor ph. num.- home",
                "opt": 1,
                "rep": 1,
                "len": 40
            },
            {
                "datatype": "TN",
                "desc": "Guarantor ph. num-business",
                "opt": 1,
                "rep": 1,
                "len": 40
            },
            {
                "datatype": "DT",
                "desc": "Guarantor date of birth",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ID",
                "desc": "Guarantor sex",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 1
            },
            {
                "datatype": "ID",
                "desc": "Guarantor type",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 68
            },
            {
                "datatype": "ID",
                "desc": "Guarantor relationship",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 63
            },
            {
                "datatype": "ST",
                "desc": "Guarantor ssn",
                "opt": 1,
                "rep": 1,
                "len": 11
            },
            {
                "datatype": "DT",
                "desc": "Guarantor date - begin",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Guarantor date - end",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "NM",
                "desc": "Guarantor priority",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "ST",
                "desc": "Guarantor employer name",
                "opt": 1,
                "rep": 1,
                "len": 45
            },
            {
                "datatype": "AD",
                "desc": "Guarantor employer address",
                "opt": 1,
                "rep": 1,
                "len": 106
            },
            {
                "datatype": "TN",
                "desc": "Guarantor employ phone  ",
                "opt": 1,
                "rep": 1,
                "len": 40
            },
            {
                "datatype": "ST",
                "desc": "Guarantor employee id num",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ID",
                "desc": "Guarantor employment status",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 66
            }
        ]
    },
    "IN1": {
        "desc": "Insurance",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set id - insurance",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ID",
                "desc": "Insurance plan id",
                "opt": 2,
                "rep": 1,
                "len": 8,
                "table": 72
            },
            {
                "datatype": "ST",
                "desc": "Insurance company id",
                "opt": 2,
                "rep": 1,
                "len": 6
            },
            {
                "datatype": "ST",
                "desc": "Insurance company name",
                "opt": 1,
                "rep": 1,
                "len": 45
            },
            {
                "datatype": "AD",
                "desc": "Insurance company address",
                "opt": 1,
                "rep": 1,
                "len": 106
            },
            {
                "datatype": "PN",
                "desc": "Insurance co. contact pers",
                "opt": 1,
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "TN",
                "desc": "Insurance co phone number",
                "opt": 1,
                "rep": 1,
                "len": 40
            },
            {
                "datatype": "ST",
                "desc": "Group number",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "ST",
                "desc": "Group name",
                "opt": 1,
                "rep": 1,
                "len": 35
            },
            {
                "datatype": "ST",
                "desc": "Insured's group emp. id",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "ST",
                "desc": "Insured's group emp. name",
                "opt": 1,
                "rep": 1,
                "len": 45
            },
            {
                "datatype": "DT",
                "desc": "Plan effective date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Plan expiration date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ST",
                "desc": "Authorization information",
                "opt": 1,
                "rep": 1,
                "len": 55
            },
            {
                "datatype": "ID",
                "desc": "Plan type",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 86
            },
            {
                "datatype": "PN",
                "desc": "Name of insured",
                "opt": 1,
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "ID",
                "desc": "Insured's relationship to patient",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 63
            },
            {
                "datatype": "DT",
                "desc": "Insured's date of birth",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "AD",
                "desc": "Insured's address",
                "opt": 1,
                "rep": 1,
                "len": 106
            },
            {
                "datatype": "ID",
                "desc": "Assignment of benefits",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "ID",
                "desc": "Coordination of benefits",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "ST",
                "desc": "Coord of ben. priority",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "ID",
                "desc": "Notice of admission code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 81
            },
            {
                "datatype": "DT",
                "desc": "Notice of admission date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ID",
                "desc": "Rpt of eligibility code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 94
            },
            {
                "datatype": "DT",
                "desc": "Rpt of eligibility date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ID",
                "desc": "Release information code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 93
            },
            {
                "datatype": "ST",
                "desc": "Pre-admit cert.",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "DT",
                "desc": "Verification date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "CM",
                "desc": "Verification by",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Type of agreement code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 98
            },
            {
                "datatype": "ID",
                "desc": "Billing status",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 22
            },
            {
                "datatype": "NM",
                "desc": "Lifetime reserve days",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "NM",
                "desc": "Delay before l. r. day",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ST",
                "desc": "Company plan code",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ST",
                "desc": "Policy number",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "NM",
                "desc": "Policy deductible",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "NM",
                "desc": "Policy limit - amount",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "NM",
                "desc": "Policy limit - days",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "NM",
                "desc": "Room rate - semi-private",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "NM",
                "desc": "Room rate - private",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "ID",
                "desc": "Insured's employment status",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 66
            },
            {
                "datatype": "ID",
                "desc": "Insured's sex",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 1
            },
            {
                "datatype": "AD",
                "desc": "Insured's employer address",
                "opt": 1,
                "rep": 1,
                "len": 106
            }
        ]
    },
    "MFI": {
        "desc": "Master file identification",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Master file identifier",
                "opt": 2,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Master file application identifier",
                "opt": 1,
                "rep": 1,
                "len": 6,
                "table": 176
            },
            {
                "datatype": "ID",
                "desc": "File-level event code",
                "opt": 2,
                "rep": 1,
                "len": 3,
                "table": 178
            },
            {
                "datatype": "TS",
                "desc": "Entered date / time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "TS",
                "desc": "Effective date / time",
                "opt": 1,
                "rep": 1,
                "len": 26
            },
            {
                "datatype": "ID",
                "desc": "Response level code",
                "opt": 2,
                "rep": 1,
                "len": 2,
                "table": 179
            }
        ]
    },
    "MRG": {
        "desc": "Merge patient information",
        "fields": [
            {
                "datatype": "CK",
                "desc": "Prior patient id - internal",
                "opt": 2,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "CK",
                "desc": "Prior alternate patient id",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "CK",
                "desc": "Prior patient account number",
                "opt": 1,
                "rep": 1,
                "len": 20
            }
        ]
    },
    "MSA": {
        "desc": "Message acknowledgment",
        "fields": [
            {
                "datatype": "ID",
                "desc": "Acknowledgment code",
                "opt": 2,
                "rep": 1,
                "len": 2,
                "table": 8
            },
            {
                "datatype": "ST",
                "desc": "Message control id",
                "opt": 2,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Text message",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "NM",
                "desc": "Expected sequence number",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "ID",
                "desc": "Delayed acknowledgment type",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 102
            }
        ]
    },
    "MSH": {
        "desc": "Message header",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Field separator",
                "opt": 2,
                "rep": 1,
                "len": 1
            },
            {
                "datatype": "ST",
                "desc": "Encoding characters",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ST",
                "desc": "Sending application",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "ST",
                "desc": "Sending facility",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Receiving application",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "ST",
                "desc": "Receiving facility",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "TS",
                "desc": "Date/time of message",
                "opt": 1,
                "rep": 1,
                "len": 19
            },
            {
                "datatype": "ST",
                "desc": "Security",
                "opt": 1,
                "rep": 1,
                "len": 40
            },
            {
                "datatype": "CM_MSG",
                "desc": "Message type",
                "opt": 2,
                "rep": 1,
                "len": 7
            },
            {
                "datatype": "ST",
                "desc": "Message control id",
                "opt": 2,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ID",
                "desc": "Processing id",
                "opt": 2,
                "rep": 1,
                "len": 1,
                "table": 103
            },
            {
                "datatype": "NM",
                "desc": "Version id",
                "opt": 2,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "NM",
                "desc": "Sequence number",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "ST",
                "desc": "Continuation pointer",
                "opt": 1,
                "rep": 1,
                "len": 180
            }
        ]
    },
    "NCK": {
        "desc": "System clock",
        "fields": [
            {
                "datatype": "TS",
                "desc": "System date/time",
                "opt": 2,
                "rep": 1,
                "len": 19
            }
        ]
    },
    "NK1": {
        "desc": "Next of kin",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set id - next of kin",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "PN",
                "desc": "Next of kin name",
                "opt": 1,
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "ST",
                "desc": "Next of kin relationship",
                "opt": 1,
                "rep": 1,
                "len": 15
            },
            {
                "datatype": "AD",
                "desc": "Next of kin - address",
                "opt": 1,
                "rep": 1,
                "len": 106
            },
            {
                "datatype": "TN",
                "desc": "Next of kin - phone number",
                "opt": 1,
                "rep": 0,
                "len": 40
            }
        ]
    },
    "NPU": {
        "desc": "Non-patient update",
        "fields": [
            {
                "datatype": "ID",
                "desc": "Bed location",
                "opt": 2,
                "rep": 1,
                "len": 12,
                "table": 79
            },
            {
                "datatype": "ID",
                "desc": "Bed status",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 116
            }
        ]
    },
    "NSC": {
        "desc": "Status change",
        "fields": [
            {
                "datatype": "ID",
                "desc": "Network change type",
                "opt": 2,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ST",
                "desc": "Current cpu",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ST",
                "desc": "Current fileserver",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ST",
                "desc": "Current application",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ST",
                "desc": "Current facility",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ST",
                "desc": "New cpu",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ST",
                "desc": "New fileserver",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ST",
                "desc": "New application",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ST",
                "desc": "New facility",
                "opt": 1,
                "rep": 1,
                "len": 30
            }
        ]
    },
    "NST": {
        "desc": "Statistics",
        "fields": [
            {
                "datatype": "ID",
                "desc": "Statistics available",
                "opt": 2,
                "rep": 1,
                "len": 1
            },
            {
                "datatype": "ST",
                "desc": "Source identifier",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ID",
                "desc": "Source type",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "TS",
                "desc": "Statistics start",
                "opt": 1,
                "rep": 1,
                "len": 19
            },
            {
                "datatype": "TS",
                "desc": "Statistics end",
                "opt": 1,
                "rep": 1,
                "len": 19
            },
            {
                "datatype": "NM",
                "desc": "Receive character count",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "NM",
                "desc": "Send character count",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "NM",
                "desc": "Messages received",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "NM",
                "desc": "Messages sent",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "NM",
                "desc": "Checksum errors received",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "NM",
                "desc": "Length errors received",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "NM",
                "desc": "Other errors received",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "NM",
                "desc": "Connect timeouts",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "NM",
                "desc": "Receive timeouts",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "NM",
                "desc": "Network errors",
                "opt": 1,
                "rep": 1,
                "len": 10
            }
        ]
    },
    "NTE": {
        "desc": "Notes and comments",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set id - notes and comments",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ID",
                "desc": "Source of comment",
                "opt": 1,
                "rep": 1,
                "len": 8,
                "table": 105
            },
            {
                "datatype": "TX",
                "desc": "Comment",
                "opt": 2,
                "rep": 0,
                "len": 120
            }
        ]
    },
    "OBR": {
        "desc": "Observation request",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set id - observation request",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CM",
                "desc": "Placer order  ",
                "opt": 1,
                "rep": 1,
                "len": 75
            },
            {
                "datatype": "CM",
                "desc": "Filler order  ",
                "opt": 1,
                "rep": 1,
                "len": 75
            },
            {
                "datatype": "CE",
                "desc": "Universal service ident.",
                "opt": 2,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "ST",
                "desc": "Priority",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "TS",
                "desc": "Requested date-time",
                "opt": 1,
                "rep": 1,
                "len": 19
            },
            {
                "datatype": "TS",
                "desc": "Observation date/time",
                "opt": 2,
                "rep": 1,
                "len": 19
            },
            {
                "datatype": "TS",
                "desc": "Observation end date/time",
                "opt": 2,
                "rep": 1,
                "len": 19
            },
            {
                "datatype": "CQ",
                "desc": "Collection volume",
                "opt": 2,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CN",
                "desc": "Collector identifier",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "ST",
                "desc": "Specimen action code",
                "opt": 1,
                "rep": 1,
                "len": 1
            },
            {
                "datatype": "CM",
                "desc": "Danger code",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ST",
                "desc": "Relevant clinical info.",
                "opt": 1,
                "rep": 1,
                "len": 300
            },
            {
                "datatype": "TS",
                "desc": "Specimen received date/time",
                "opt": 2,
                "rep": 1,
                "len": 19
            },
            {
                "datatype": "CM",
                "desc": "Specimen source",
                "opt": 1,
                "rep": 1,
                "len": 300
            },
            {
                "datatype": "CN",
                "desc": "Ordering provider",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "TN",
                "desc": "Order call-back phone num",
                "opt": 1,
                "rep": 2,
                "len": 40
            },
            {
                "datatype": "ST",
                "desc": "Placers field  1",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ST",
                "desc": "Placers field  2",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ST",
                "desc": "Fillers field  1",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ST",
                "desc": "Fillers field  2",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "TS",
                "desc": "Results rpt/status chng - date/t",
                "opt": 2,
                "rep": 1,
                "len": 19
            },
            {
                "datatype": "CM",
                "desc": "Charge to practice",
                "opt": 1,
                "rep": 1,
                "len": 40
            },
            {
                "datatype": "ID",
                "desc": "Diagnostic serv sect id",
                "opt": 1,
                "rep": 1,
                "len": 10,
                "table": 74
            },
            {
                "datatype": "ID",
                "desc": "Result status",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 123
            },
            {
                "datatype": "CE",
                "desc": "Linked results",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CM",
                "desc": "Quantity/timing",
                "opt": 1,
                "rep": 0,
                "len": 200
            },
            {
                "datatype": "CN",
                "desc": "Result copies to",
                "opt": 1,
                "rep": 5,
                "len": 80
            },
            {
                "datatype": "CM",
                "desc": "Parent accession  ",
                "opt": 1,
                "rep": 1,
                "len": 150
            },
            {
                "datatype": "ID",
                "desc": "Transportation mode",
                "opt": 1,
                "rep": 1,
                "len": 20,
                "table": 124
            },
            {
                "datatype": "CE",
                "desc": "Reason for study",
                "opt": 1,
                "rep": 0,
                "len": 300
            },
            {
                "datatype": "CN",
                "desc": "Principal result interpreter",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CN",
                "desc": "Assistant result interpreter",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CN",
                "desc": "Technician",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CN",
                "desc": "Transcriptionist",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "TS",
                "desc": "Scheduled - date/time",
                "opt": 1,
                "rep": 1,
                "len": 19
            }
        ]
    },
    "OBX": {
        "desc": "Result",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set id - observation simple",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ID",
                "desc": "Value type",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 125
            },
            {
                "datatype": "CE",
                "desc": "Observation identifier",
                "opt": 2,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "NM",
                "desc": "Observation sub-id",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "VARIES",
                "desc": "Observation results",
                "opt": 2,
                "rep": 1,
                "len": 65
            },
            {
                "datatype": "ID",
                "desc": "Units",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "References range",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ST",
                "desc": "Abnormal flags",
                "opt": 1,
                "rep": 5,
                "len": 10
            },
            {
                "datatype": "NM",
                "desc": "Probability",
                "opt": 1,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "ID",
                "desc": "Nature of abnormal test",
                "opt": 1,
                "rep": 1,
                "len": 5,
                "table": 80
            },
            {
                "datatype": "ID",
                "desc": "Observ result status",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 85
            },
            {
                "datatype": "TS",
                "desc": "Date last obs normal values",
                "opt": 1,
                "rep": 1,
                "len": 19
            }
        ]
    },
    "ORC": {
        "desc": "Common order",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Order control",
                "opt": 2,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "CM",
                "desc": "Placer order  ",
                "opt": 1,
                "rep": 1,
                "len": 75
            },
            {
                "datatype": "CM",
                "desc": "Filler order  ",
                "opt": 1,
                "rep": 1,
                "len": 75
            },
            {
                "datatype": "CM",
                "desc": "Placer group  ",
                "opt": 1,
                "rep": 1,
                "len": 75
            },
            {
                "datatype": "ST",
                "desc": "Order status",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "ST",
                "desc": "Response flag",
                "opt": 1,
                "rep": 1,
                "len": 1
            },
            {
                "datatype": "CM",
                "desc": "Timing/quantity",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "CM",
                "desc": "Parent",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "TS",
                "desc": "Date/time of transaction",
                "opt": 1,
                "rep": 1,
                "len": 19
            },
            {
                "datatype": "CN",
                "desc": "Entered by",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "CN",
                "desc": "Verified by",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "CN",
                "desc": "Ordering provider",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "CM",
                "desc": "Enterer's location",
                "opt": 1,
                "rep": 1,
                "len": 80
            },
            {
                "datatype": "TN",
                "desc": "Call back phone number",
                "opt": 1,
                "rep": 2,
                "len": 40
            }
        ]
    },
    "ORO": {
        "desc": "Order other",
        "fields": [
            {
                "datatype": "CE",
                "desc": "Order item id",
                "opt": 1,
                "rep": 1,
                "len": 200
            },
            {
                "datatype": "ID",
                "desc": "Substitute allowed",
                "opt": 1,
                "rep": 1,
                "len": 1
            },
            {
                "datatype": "CN",
                "desc": "Results copies to",
                "opt": 1,
                "rep": 0,
                "len": 80
            },
            {
                "datatype": "ID",
                "desc": "Stock location",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 12
            }
        ]
    },
    "PID": {
        "desc": "Patient identification",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set id - patient id",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CK",
                "desc": "Patient id external",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "CK",
                "desc": "Patient id internal",
                "opt": 2,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "ST",
                "desc": "Alternate patient id",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "PN",
                "desc": "Patient name",
                "opt": 2,
                "rep": 1,
                "len": 48
            },
            {
                "datatype": "ST",
                "desc": "Mother's maiden name",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "DT",
                "desc": "Date of birth",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ID",
                "desc": "Sex",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 1
            },
            {
                "datatype": "PN",
                "desc": "Patient alias",
                "opt": 1,
                "rep": 0,
                "len": 48
            },
            {
                "datatype": "ID",
                "desc": "Ethnic group",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 5
            },
            {
                "datatype": "AD",
                "desc": "Patient address",
                "opt": 1,
                "rep": 1,
                "len": 106
            },
            {
                "datatype": "ID",
                "desc": "County code",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "TN",
                "desc": "Phone number - home",
                "opt": 1,
                "rep": 3,
                "len": 40
            },
            {
                "datatype": "TN",
                "desc": "Phone number - business",
                "opt": 1,
                "rep": 3,
                "len": 40
            },
            {
                "datatype": "ST",
                "desc": "Language - patient",
                "opt": 1,
                "rep": 1,
                "len": 25
            },
            {
                "datatype": "ID",
                "desc": "Marital status",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 2
            },
            {
                "datatype": "ID",
                "desc": "Religion",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 6
            },
            {
                "datatype": "CK",
                "desc": "Patient account number",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Ssn number - patient",
                "opt": 1,
                "rep": 1,
                "len": 16
            },
            {
                "datatype": "CM",
                "desc": "Driver's lic num - patient",
                "opt": 1,
                "rep": 1,
                "len": 25
            }
        ]
    },
    "PR1": {
        "desc": "Procedures",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set id - procedure",
                "opt": 2,
                "rep": 0,
                "len": 4
            },
            {
                "datatype": "ID",
                "desc": "Procedure coding method.",
                "opt": 2,
                "rep": 1,
                "len": 2,
                "table": 89
            },
            {
                "datatype": "ID",
                "desc": "Procedure code",
                "opt": 2,
                "rep": 1,
                "len": 10,
                "table": 88
            },
            {
                "datatype": "ST",
                "desc": "Procedure description",
                "opt": 1,
                "rep": 1,
                "len": 40
            },
            {
                "datatype": "TS",
                "desc": "Procedure date/time",
                "opt": 2,
                "rep": 1,
                "len": 19
            },
            {
                "datatype": "ID",
                "desc": "Procedure type",
                "opt": 2,
                "rep": 1,
                "len": 2,
                "table": 90
            },
            {
                "datatype": "NM",
                "desc": "Procedure minutes",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CN",
                "desc": "Anesthesiologist",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Anesthesia code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 19
            },
            {
                "datatype": "NM",
                "desc": "Anesthesia minutes",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "CN",
                "desc": "Surgeon",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CN",
                "desc": "Resident code",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Consent code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 59
            }
        ]
    },
    "PV1": {
        "desc": "Patient visit",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set id - patient visit",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ID",
                "desc": "Patient class",
                "opt": 2,
                "rep": 1,
                "len": 1,
                "table": 4
            },
            {
                "datatype": "ID",
                "desc": "Assigned patient location",
                "opt": 2,
                "rep": 1,
                "len": 12,
                "table": 79
            },
            {
                "datatype": "ID",
                "desc": "Admission type",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 7
            },
            {
                "datatype": "ST",
                "desc": "Pre-admit number",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ID",
                "desc": "Prior patient location",
                "opt": 1,
                "rep": 1,
                "len": 12,
                "table": 79
            },
            {
                "datatype": "CN",
                "desc": "Attending doctor",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CN",
                "desc": "Referring doctor",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "CN",
                "desc": "Consulting doctor",
                "opt": 1,
                "rep": 0,
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Hospital service",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 69
            },
            {
                "datatype": "ID",
                "desc": "Temporary location",
                "opt": 1,
                "rep": 1,
                "len": 12,
                "table": 79
            },
            {
                "datatype": "ID",
                "desc": "Pre-admit test indicator",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 87
            },
            {
                "datatype": "ID",
                "desc": "Re-admission indicator",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 92
            },
            {
                "datatype": "ID",
                "desc": "Admit source",
                "opt": 1,
                "rep": 1,
                "len": 3,
                "table": 23
            },
            {
                "datatype": "ID",
                "desc": "Ambulatory status",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 9
            },
            {
                "datatype": "ID",
                "desc": "Vip indicator",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 99
            },
            {
                "datatype": "CN",
                "desc": "Admitting doctor",
                "opt": 1,
                "rep": 1,
                "len": 60
            },
            {
                "datatype": "ID",
                "desc": "Patient type",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 18
            },
            {
                "datatype": "NM",
                "desc": "Visit number",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ID",
                "desc": "Financial class",
                "opt": 1,
                "rep": 4,
                "len": 11,
                "table": 64
            },
            {
                "datatype": "ID",
                "desc": "Charge price indicator",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 32
            },
            {
                "datatype": "ID",
                "desc": "Courtesy code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 45
            },
            {
                "datatype": "ID",
                "desc": "Credit rating",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 46
            },
            {
                "datatype": "ID",
                "desc": "Contract code",
                "opt": 1,
                "rep": 0,
                "len": 2,
                "table": 44
            },
            {
                "datatype": "DT",
                "desc": "Contract effective date",
                "opt": 1,
                "rep": 0,
                "len": 8
            },
            {
                "datatype": "NM",
                "desc": "Contract amount",
                "opt": 1,
                "rep": 0,
                "len": 12
            },
            {
                "datatype": "NM",
                "desc": "Contract period",
                "opt": 1,
                "rep": 0,
                "len": 3
            },
            {
                "datatype": "ID",
                "desc": "Interest code",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 73
            },
            {
                "datatype": "ID",
                "desc": "Transfer to bad debt code",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 110
            },
            {
                "datatype": "DT",
                "desc": "Transfer to bad debt date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ST",
                "desc": "Bad debt agency code",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "NM",
                "desc": "Bad debt transfer amount",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "NM",
                "desc": "Bad debt recovery amount",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "ID",
                "desc": "Delete account indicator",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 111
            },
            {
                "datatype": "DT",
                "desc": "Delete account date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ID",
                "desc": "Discharge disposition",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 112
            },
            {
                "datatype": "ID",
                "desc": "Discharged to location",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 113
            },
            {
                "datatype": "ID",
                "desc": "Diet type",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 114
            },
            {
                "datatype": "ID",
                "desc": "Servicing facility",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 115
            },
            {
                "datatype": "ID",
                "desc": "Bed status",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 116
            },
            {
                "datatype": "ID",
                "desc": "Account status",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 117
            },
            {
                "datatype": "ID",
                "desc": "Pending location",
                "opt": 1,
                "rep": 1,
                "len": 12,
                "table": 79
            },
            {
                "datatype": "ID",
                "desc": "Prior temporary location",
                "opt": 1,
                "rep": 1,
                "len": 12,
                "table": 79
            },
            {
                "datatype": "TS",
                "desc": "Admit date/time",
                "opt": 1,
                "rep": 1,
                "len": 19
            },
            {
                "datatype": "TS",
                "desc": "Discharge date/time",
                "opt": 1,
                "rep": 1,
                "len": 19
            },
            {
                "datatype": "NM",
                "desc": "Current patient balance",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "NM",
                "desc": "Total charges",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "NM",
                "desc": "Total adjustments",
                "opt": 1,
                "rep": 1,
                "len": 12
            },
            {
                "datatype": "NM",
                "desc": "Total payments",
                "opt": 1,
                "rep": 1,
                "len": 12
            }
        ]
    },
    "QRD": {
        "desc": "Query definition",
        "fields": [
            {
                "datatype": "TS",
                "desc": "Query date/time",
                "opt": 2,
                "rep": 1,
                "len": 19
            },
            {
                "datatype": "ID",
                "desc": "Query format code",
                "opt": 2,
                "rep": 1,
                "len": 1,
                "table": 106
            },
            {
                "datatype": "ID",
                "desc": "Query priority",
                "opt": 2,
                "rep": 1,
                "len": 1,
                "table": 91
            },
            {
                "datatype": "ST",
                "desc": "Query id",
                "opt": 2,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "ID",
                "desc": "Deferred response type",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 107
            },
            {
                "datatype": "TS",
                "desc": "Deferred response date/time",
                "opt": 1,
                "rep": 1,
                "len": 19
            },
            {
                "datatype": "CQ",
                "desc": "Quantity limited request",
                "opt": 2,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "ST",
                "desc": "Who subject filter",
                "opt": 2,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "ID",
                "desc": "What subject filter",
                "opt": 2,
                "rep": 0,
                "len": 3,
                "table": 48
            },
            {
                "datatype": "ST",
                "desc": "What department data code",
                "opt": 2,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "What data code value qual.",
                "opt": 1,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "ID",
                "desc": "Query results level",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 108
            }
        ]
    },
    "QRF": {
        "desc": "Query filter",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Where subject filter",
                "opt": 2,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "TS",
                "desc": "When data start date/time",
                "opt": 1,
                "rep": 1,
                "len": 19
            },
            {
                "datatype": "TS",
                "desc": "When data end date/time",
                "opt": 1,
                "rep": 1,
                "len": 19
            },
            {
                "datatype": "ST",
                "desc": "What user qualifier",
                "opt": 1,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "Other qry subject filter",
                "opt": 1,
                "rep": 0,
                "len": 20
            }
        ]
    },
    "RX1": {
        "desc": "Pharmacy order",
        "fields": [
            {
                "datatype": "ST",
                "desc": "Unused",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Unused",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "ST",
                "desc": "Route",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ST",
                "desc": "Site administered",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "CQ",
                "desc": "Iv solution rate",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "CQ",
                "desc": "Drug strength",
                "opt": 1,
                "rep": 1,
                "len": 14
            },
            {
                "datatype": "NM",
                "desc": "Final concentration",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "NM",
                "desc": "Final volume in ml.",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "CM",
                "desc": "Drug dose",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "ID",
                "desc": "Drug role",
                "opt": 1,
                "rep": 1,
                "len": 1
            },
            {
                "datatype": "NM",
                "desc": "Prescription sequence  ",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "CQ",
                "desc": "Quantity dispensed",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ST",
                "desc": "Unused",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "CE",
                "desc": "Drug id",
                "opt": 1,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "ID",
                "desc": "Component drug ids",
                "opt": 1,
                "rep": 5,
                "len": 5
            },
            {
                "datatype": "ID",
                "desc": "Prescription type",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "ID",
                "desc": "Substitution status",
                "opt": 1,
                "rep": 1,
                "len": 1
            },
            {
                "datatype": "ID",
                "desc": "Rx order status",
                "opt": 1,
                "rep": 1,
                "len": 2,
                "table": 38
            },
            {
                "datatype": "NM",
                "desc": "Number of refills",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "ST",
                "desc": "Unused",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "NM",
                "desc": "Refills remaining",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "ID",
                "desc": "Dea class",
                "opt": 1,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "NM",
                "desc": "Ordering md's dea number",
                "opt": 1,
                "rep": 1,
                "len": 10
            },
            {
                "datatype": "ST",
                "desc": "Unused",
                "opt": 1,
                "rep": 1
            },
            {
                "datatype": "TS",
                "desc": "Last refill date/time",
                "opt": 1,
                "rep": 1,
                "len": 19
            },
            {
                "datatype": "ST",
                "desc": "Rx number",
                "opt": 1,
                "rep": 1,
                "len": 20
            },
            {
                "datatype": "ID",
                "desc": "Prn status",
                "opt": 1,
                "rep": 1,
                "len": 5
            },
            {
                "datatype": "TX",
                "desc": "Pharmacy instructions",
                "opt": 1,
                "rep": 5,
                "len": 80
            },
            {
                "datatype": "TX",
                "desc": "Patient instructions",
                "opt": 1,
                "rep": 5,
                "len": 80
            },
            {
                "datatype": "TX",
                "desc": "Instructions",
                "opt": 1,
                "rep": 0,
                "len": 500
            }
        ]
    },
    "UB1": {
        "desc": "Ub82 data",
        "fields": [
            {
                "datatype": "SI",
                "desc": "Set id - ub82",
                "opt": 1,
                "rep": 1,
                "len": 4
            },
            {
                "datatype": "ST",
                "desc": "Blood deductible",
                "opt": 1,
                "rep": 1,
                "len": 1
            },
            {
                "datatype": "ST",
                "desc": "Blood furn.-pints of",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "ST",
                "desc": "Blood replaced-pints",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "ST",
                "desc": "Blood not rplcd-pints",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "ST",
                "desc": "Co-insurance days",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "ID",
                "desc": "Condition code",
                "opt": 1,
                "rep": 5,
                "len": 2,
                "table": 43
            },
            {
                "datatype": "ST",
                "desc": "Covered days -",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "ST",
                "desc": "Non covered days -",
                "opt": 1,
                "rep": 1,
                "len": 3
            },
            {
                "datatype": "CM",
                "desc": "Value amount & code",
                "opt": 1,
                "rep": 8,
                "len": 12
            },
            {
                "datatype": "ST",
                "desc": "Number of grace days",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "ID",
                "desc": "Spec. prog. indicator",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "ID",
                "desc": "Psro/ur approval ind.",
                "opt": 1,
                "rep": 1,
                "len": 1
            },
            {
                "datatype": "DT",
                "desc": "Psro/ur aprvd stay-fm",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Psro/ur aprvd stay-to",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ID",
                "desc": "Occurrence",
                "opt": 1,
                "rep": 5,
                "len": 20
            },
            {
                "datatype": "ID",
                "desc": "Occurrence span",
                "opt": 1,
                "rep": 1,
                "len": 2
            },
            {
                "datatype": "DT",
                "desc": "Occurrence span start date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "DT",
                "desc": "Occur. span end date",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ST",
                "desc": "Ub-82 locator 2",
                "opt": 1,
                "rep": 1,
                "len": 30
            },
            {
                "datatype": "ST",
                "desc": "Ub-82 locator 9",
                "opt": 1,
                "rep": 1,
                "len": 7
            },
            {
                "datatype": "ST",
                "desc": "Ub-82 locator 27",
                "opt": 1,
                "rep": 1,
                "len": 8
            },
            {
                "datatype": "ST",
                "desc": "Ub-82 locator 45",
                "opt": 1,
                "rep": 1,
                "len": 17
            }
        ]
    },
    "URD": {
        "desc": "Results/update definition",
        "fields": [
            {
                "datatype": "TS",
                "desc": "R/u date/time",
                "opt": 1,
                "rep": 1,
                "len": 19
            },
            {
                "datatype": "ID",
                "desc": "Report priority",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 109
            },
            {
                "datatype": "ST",
                "desc": "R/u who subject definition",
                "opt": 2,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "ID",
                "desc": "R/u what subject definition",
                "opt": 1,
                "rep": 0,
                "len": 3,
                "table": 48
            },
            {
                "datatype": "ST",
                "desc": "R/u what department code",
                "opt": 1,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "R/u display/print locations",
                "opt": 1,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "ID",
                "desc": "R/u results level",
                "opt": 1,
                "rep": 1,
                "len": 1,
                "table": 108
            }
        ]
    },
    "URS": {
        "desc": "Unsolicited selection",
        "fields": [
            {
                "datatype": "ST",
                "desc": "R/u where subject definition",
                "opt": 2,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "TS",
                "desc": "R/u when data start date/time",
                "opt": 1,
                "rep": 1,
                "len": 19
            },
            {
                "datatype": "TS",
                "desc": "R/u when data end date/time",
                "opt": 1,
                "rep": 1,
                "len": 19
            },
            {
                "datatype": "ST",
                "desc": "R/u what user qualifier",
                "opt": 1,
                "rep": 0,
                "len": 20
            },
            {
                "datatype": "ST",
                "desc": "R/u other results subject defini",
                "opt": 1,
                "rep": 0,
                "len": 20
            }
        ]
    }
};

module.exports = segments;

},{}]},{},[2])(2)
});