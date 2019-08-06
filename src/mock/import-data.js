const data = {
    "header": {
        "creator_code": "AGTORT",
        "creator_port_code": null,
        "description": "SHIPPING DOCUMENT",
        "option_port": false,
        "payer_comm_charges": "BJ",
        "receiver_codes": [
            "COSCON"
        ],
        "receiver_port_codes": [
            "BGVAR"
        ],
        "send_time": "2019-01-31T23:55:00",
        "send_time_tag": "L",
        "sender_code": "AGTORT",
        "sender_port_code": "GRPIR",
        "tag": 0,
        "type": "DOC",
        "version": "3.1"
    },
    "shipment_informations": [
        {
            "cargo_descriptions": [
                {
                    "cargo_descriptions": [
                        {
                            "cargo_description_1": "STC 76 DRUMS OF",
                            "cargo_description_2": "ASEPTIC RED GRAPEFRUIT",
                            "cargo_description_3": "BLEND T-390",
                            "cargo_description_4": null,
                            "cargo_sequence_number": 1,
                            "tag": 47
                        }
                    ],
                    "cargo_fields": {
                        "cargo_code": null,
                        "cargo_measurement": null,
                        "cargo_sequence_number": 1,
                        "cargo_weight_gross": "20839.2",
                        "cargo_weight_net": null,
                        "is_cargo_dangerous": false,
                        "number_of_packages": 76,
                        "package_kind_code": "DR",
                        "package_kind_description": "DRUM",
                        "tag": 41,
                        "unknown": "000020839200"
                    },
                    "cargo_in_containers": [
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "0",
                            "container_cargo_weight_kg": "20839.2",
                            "container_cycfs_item": "LI-FO",
                            "container_kind_of_packages": "DR",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "TCLU2043226",
                            "container_number_of_packages": 76,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "2154893",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC208392002154893"
                        }
                    ],
                    "cargo_marks": [
                        {
                            "cargo_sequence_number": 1,
                            "marks": [],
                            "tag": 44
                        }
                    ],
                    "dangerous_cargo_desc": {
                        "dangerous_cargo_49_field": {},
                        "dangerous_text": {}
                    }
                }
            ],
            "first_record_of_b_1": {
                "bol_all_empty_ctn": false,
                "bol_all_empty_ctn_code": "N",
                "bol_cycfs_item": "LI-FO",
                "bol_is_transshipment_port": false,
                "bol_is_transshipment_port_code": "N",
                "bol_number": "COEU9007111930",
                "bol_prepaid_or_collect": "Prepaid",
                "bol_prepaid_or_collect_code": "P",
                "loading_date": "2019-01-10",
                "place_of_loading": "ILHFA",
                "place_of_receipt": "ILHFA",
                "pre_vessel_code": "UEP",
                "pre_vessel_name": "NAVIOS INDIGO",
                "pre_voyage_number": "011N",
                "quarantine_coding": null,
                "shipping_and_carrier_number": "HFA00807014",
                "shipping_order_number": null,
                "tag": 12
            },
            "freight_informations": [
                {
                    "amount": "200",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "OFT",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "200",
                    "sequence_number": 7,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "250",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "THC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "250",
                    "sequence_number": 6,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "17",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "SSL",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "17",
                    "sequence_number": 5,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "15",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "SSD",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 4,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "25",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ENS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "25",
                    "sequence_number": 3,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "30",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "EBS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "30",
                    "sequence_number": 2,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "15",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "AFI",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 1,
                    "tag": 61,
                    "unknown": null
                }
            ],
            "information_for_reference": {
                "fields_not_in_manifest": {
                    "bol_place_and_date_of_issue": "190110",
                    "bol_place_of_issue": null,
                    "payable_at": null,
                    "prepaid_at": null,
                    "tag": 74
                },
                "in_words": [],
                "other_fields1": [
                    {
                        "tag": 71,
                        "up_remark_1": "OCEAN FREIGHT PREPAID",
                        "up_remark_2": "ON LI-FO TERM",
                        "up_remark_3": "SHIPPER'S LOAD STOW COUNT AND SEAL"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "CSO NUMBER: HFA00807014V1",
                        "up_remark_2": null,
                        "up_remark_3": null
                    }
                ],
                "other_fields2": []
            },
            "parties_concern": {
                "consignee_fields": [
                    {
                        "consignee_1": "PLOVDIV 4004 BULGARIA",
                        "consignee_2": "TEL:00359.32953172 OR 359888660415",
                        "consignee_3": null,
                        "consignee_code": null,
                        "tag": 21
                    },
                    {
                        "consignee_1": "PHILICON 97 S.A.",
                        "consignee_2": "35 KOMATEVSKO SHOSHE",
                        "consignee_3": "BLVD",
                        "consignee_code": null,
                        "tag": 21
                    }
                ],
                "notify_party_fields": [
                    {
                        "notified_code": null,
                        "notified_data_1": "PLOVDIV 4004 BULGARIA",
                        "notified_data_2": "TEL:00359.32953172 OR 359888660415",
                        "notified_data_3": null,
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    },
                    {
                        "notified_code": null,
                        "notified_data_1": "PHILICON 97 S.A.",
                        "notified_data_2": "35 KOMATEVSKO SHOSHE",
                        "notified_data_3": "BLVD",
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    }
                ],
                "shipper_fields": [
                    {
                        "shipper_1": "GIVAT HAIM ISRAEL",
                        "shipper_2": "TEL:04-6368887/851",
                        "shipper_3": null,
                        "shipper_code": null,
                        "tag": 16
                    },
                    {
                        "shipper_1": "GAT GIVAT HAIM COOPERATIVE SOCIETY",
                        "shipper_2": "FOR PRESERVATION OF AGRICULTURAL",
                        "shipper_3": "PRODUCTS LTD.",
                        "shipper_code": null,
                        "tag": 16
                    }
                ]
            },
            "port_place": {
                "bol_port_of_delivery_code": "BGVAR",
                "bol_port_of_delivery_name": "VARNA",
                "bol_port_of_discharge": "BGVAR",
                "final_destination_code": null,
                "final_destination_name": null,
                "optional_ports": [],
                "tag": 13
            }
        },
        {
            "cargo_descriptions": [
                {
                    "cargo_descriptions": [
                        {
                            "cargo_description_1": "MERCEDES-BENZ GLS 450 4MATIC",
                            "cargo_description_2": "VIN:",
                            "cargo_description_3": "4JGDF6EE8HA762324",
                            "cargo_description_4": null,
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "- USED MOTORCYCLE: 2015",
                            "cargo_description_2": "HARLEY-DAVIDSON FLHTKSE",
                            "cargo_description_3": "C VIN: 1HD1TEN16FB959263",
                            "cargo_description_4": "- USED AUTO: 2017",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "TANK(S) COMPLETELY DRAINED.",
                            "cargo_description_2": "- USED AUTO: 2016 BMW X1",
                            "cargo_description_3": "XDRIVE28I",
                            "cargo_description_4": "VIN: WBXHT3C3XG5E50923",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "VIN: MH3SH10Y0JK001282",
                            "cargo_description_2": "- HS CODE 870323",
                            "cargo_description_3": "THE BATTERY CABLES HAVE BEEN",
                            "cargo_description_4": "DISCONNECTED, AND THE FUEL",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "- USED AUTO: 2010 BMW 328I",
                            "cargo_description_2": "VIN: WBAPH7C50AA175753",
                            "cargo_description_3": "- USED MOTORCYCLE: 2018 YAMAHA",
                            "cargo_description_4": "CZD300 A",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        }
                    ],
                    "cargo_fields": {
                        "cargo_code": null,
                        "cargo_measurement": null,
                        "cargo_sequence_number": 1,
                        "cargo_weight_gross": "6770",
                        "cargo_weight_net": null,
                        "is_cargo_dangerous": false,
                        "number_of_packages": 5,
                        "package_kind_code": "UT",
                        "package_kind_description": "UNIT",
                        "tag": 41,
                        "unknown": "000006770000"
                    },
                    "cargo_in_containers": [
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "0",
                            "container_cargo_weight_kg": "6770",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "UT",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "FCIU9880057",
                            "container_number_of_packages": 5,
                            "container_size_and_type_iso_code": "4510",
                            "container_tare_weight_kg": "4000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "260941",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC06770000260941"
                        }
                    ],
                    "cargo_marks": [
                        {
                            "cargo_sequence_number": 1,
                            "marks": [],
                            "tag": 44
                        }
                    ],
                    "dangerous_cargo_desc": {
                        "dangerous_cargo_49_field": {},
                        "dangerous_text": {}
                    }
                }
            ],
            "first_record_of_b_1": {
                "bol_all_empty_ctn": false,
                "bol_all_empty_ctn_code": "N",
                "bol_cycfs_item": "CY-FO",
                "bol_is_transshipment_port": false,
                "bol_is_transshipment_port_code": "N",
                "bol_number": "COEU9006447900",
                "bol_prepaid_or_collect": "Prepaid",
                "bol_prepaid_or_collect_code": "P",
                "loading_date": "2018-12-19",
                "place_of_loading": "USSAV",
                "place_of_receipt": "USSAV",
                "pre_vessel_code": "RH1",
                "pre_vessel_name": "NAVIOS AZURE",
                "pre_voyage_number": "011S",
                "quarantine_coding": null,
                "shipping_and_carrier_number": "CCN19001",
                "shipping_order_number": null,
                "tag": 12
            },
            "freight_informations": [
                {
                    "amount": "225",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "OFT",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "225",
                    "sequence_number": 5,
                    "tag": 61,
                    "unknown": "Y"
                },
                {
                    "amount": "35",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "TLX",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "35",
                    "sequence_number": 4,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "15",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "PSD",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 3,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "15",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "DCI",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 2,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "400",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ARD",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "400",
                    "sequence_number": 1,
                    "tag": 61,
                    "unknown": null
                }
            ],
            "information_for_reference": {
                "fields_not_in_manifest": {
                    "bol_place_and_date_of_issue": "181219",
                    "bol_place_of_issue": null,
                    "payable_at": null,
                    "prepaid_at": null,
                    "tag": 74
                },
                "in_words": [],
                "other_fields1": [
                    {
                        "tag": 71,
                        "up_remark_1": "OWES $100.00 (65.00 SHORTPAID AND 3",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "ON CONTRARY TO U.S. LAW",
                        "up_remark_2": "IS PROHIBITED.",
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "FROM THE UNITED STATES IN ACCORDANC",
                        "up_remark_2": "E WITH THE EXPORT",
                        "up_remark_3": "ADMINISTRATION REGULATIONS. DIVERSI"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "SHIPPER'S LOAD STOW COUNT AND SEAL",
                        "up_remark_2": "THESE COMMODITIES, TECHNOLOGIES OR",
                        "up_remark_3": "SOFTWARE WERE EXPORTED"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "OCEAN FREIGHT PREPAID",
                        "up_remark_2": "AES X20181205141106 X20181205138742",
                        "up_remark_3": "AES X20181205139879 X20181205140273"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "CSO NUMBER: CCN19001",
                        "up_remark_2": null,
                        "up_remark_3": null
                    }
                ],
                "other_fields2": []
            },
            "parties_concern": {
                "consignee_fields": [
                    {
                        "consignee_1": "PHONE: +359 2 9151144",
                        "consignee_2": "FAX: +359 2 9151145*",
                        "consignee_3": null,
                        "consignee_code": null,
                        "tag": 21
                    },
                    {
                        "consignee_1": "FREELINE LTD",
                        "consignee_2": "1, KRASTYO SARAFOV, FLOOR 1.",
                        "consignee_3": "SOFIA, 1164 BULGARIA",
                        "consignee_code": null,
                        "tag": 21
                    }
                ],
                "notify_party_fields": [
                    {
                        "notified_code": null,
                        "notified_data_1": "*EMAIL: VENKO@FREELINE.BG",
                        "notified_data_2": null,
                        "notified_data_3": null,
                        "notified_party_sequence_number": 2,
                        "tag": 26
                    },
                    {
                        "notified_code": null,
                        "notified_data_1": "TEL: +359 2 9151144",
                        "notified_data_2": "FAX: +359 2 9151145",
                        "notified_data_3": null,
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    },
                    {
                        "notified_code": null,
                        "notified_data_1": "FREELINE LTD",
                        "notified_data_2": "1, KRASTYO SARAFOV, FLOOR 1.",
                        "notified_data_3": "1164 SOFIA, BULGARIA",
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    }
                ],
                "shipper_fields": [
                    {
                        "shipper_1": "46032",
                        "shipper_2": "USA",
                        "shipper_3": null,
                        "shipper_code": null,
                        "tag": 16
                    },
                    {
                        "shipper_1": "USA INTERCARGO LLC",
                        "shipper_2": "564 INDUSTRIAL DR.",
                        "shipper_3": "CARMEL IN",
                        "shipper_code": null,
                        "tag": 16
                    }
                ]
            },
            "port_place": {
                "bol_port_of_delivery_code": "BGVAR",
                "bol_port_of_delivery_name": "VARNA, BG",
                "bol_port_of_discharge": "BGVAR",
                "final_destination_code": null,
                "final_destination_name": null,
                "optional_ports": [],
                "tag": 13
            }
        },
        {
            "cargo_descriptions": [
                {
                    "cargo_descriptions": [
                        {
                            "cargo_description_1": "10 PLTS BC54 + 10 PLTS MQ58",
                            "cargo_description_2": null,
                            "cargo_description_3": null,
                            "cargo_description_4": null,
                            "cargo_sequence_number": 1,
                            "tag": 47
                        }
                    ],
                    "cargo_fields": {
                        "cargo_code": null,
                        "cargo_measurement": "50",
                        "cargo_sequence_number": 1,
                        "cargo_weight_gross": "8820",
                        "cargo_weight_net": null,
                        "is_cargo_dangerous": false,
                        "number_of_packages": 20,
                        "package_kind_code": "PL",
                        "package_kind_description": "PALLET",
                        "tag": 41,
                        "unknown": "000008820000"
                    },
                    "cargo_in_containers": [
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "50",
                            "container_cargo_weight_kg": "8820",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "PL",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "BEAU2240841",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "BS372959",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC08820000BS372959"
                        }
                    ],
                    "cargo_marks": [
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "T2L"
                                }
                            ],
                            "tag": 44
                        }
                    ],
                    "dangerous_cargo_desc": {
                        "dangerous_cargo_49_field": {},
                        "dangerous_text": {}
                    }
                }
            ],
            "first_record_of_b_1": {
                "bol_all_empty_ctn": false,
                "bol_all_empty_ctn_code": "N",
                "bol_cycfs_item": "CY-FO",
                "bol_is_transshipment_port": false,
                "bol_is_transshipment_port_code": "N",
                "bol_number": "COEU9003539580W",
                "bol_prepaid_or_collect": "Prepaid",
                "bol_prepaid_or_collect_code": "P",
                "loading_date": "2018-12-29",
                "place_of_loading": "NLROT",
                "place_of_receipt": "NLROT",
                "pre_vessel_code": "N6L",
                "pre_vessel_name": "SEASPAN JAKARTA",
                "pre_voyage_number": "012S",
                "quarantine_coding": null,
                "shipping_and_carrier_number": "RTM02632005",
                "shipping_order_number": null,
                "tag": 12
            },
            "freight_informations": [
                {
                    "amount": "350",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "OFT",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "350",
                    "sequence_number": 9,
                    "tag": 61,
                    "unknown": "Y"
                },
                {
                    "amount": "200",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "THC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "200",
                    "sequence_number": 8,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "15",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "SSL",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 7,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "15",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "SSD",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 6,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "25",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "LSS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "25",
                    "sequence_number": 5,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "25",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "EBS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "25",
                    "sequence_number": 4,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "50",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "DOC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "50",
                    "sequence_number": 3,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "100",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "AMF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "100",
                    "sequence_number": 2,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "15",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "AFI",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 1,
                    "tag": 61,
                    "unknown": null
                }
            ],
            "information_for_reference": {
                "fields_not_in_manifest": {
                    "bol_place_and_date_of_issue": "181229",
                    "bol_place_of_issue": null,
                    "payable_at": null,
                    "prepaid_at": null,
                    "tag": 74
                },
                "in_words": [],
                "other_fields1": [
                    {
                        "tag": 71,
                        "up_remark_1": "OCEAN FREIGHT PREPAID",
                        "up_remark_2": "ON CY-FO TERM",
                        "up_remark_3": "SHIPPER'S LOAD STOW COUNT AND SEAL"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "SEAWAY BILL ISSUED",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "CSO NUMBER: RTM02632005V1",
                        "up_remark_2": null,
                        "up_remark_3": null
                    }
                ],
                "other_fields2": []
            },
            "parties_concern": {
                "consignee_fields": [
                    {
                        "consignee_1": "TEL +359 2 9623516",
                        "consignee_2": null,
                        "consignee_3": null,
                        "consignee_code": null,
                        "tag": 21
                    },
                    {
                        "consignee_1": "LEAF GROUP LTD.",
                        "consignee_2": "84, IZTOCNA TANGENTA STR.",
                        "consignee_3": "1592 SOFIA, BULGARIA",
                        "consignee_code": null,
                        "tag": 21
                    }
                ],
                "notify_party_fields": [
                    {
                        "notified_code": null,
                        "notified_data_1": "TEL +359 2 9623516",
                        "notified_data_2": null,
                        "notified_data_3": null,
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    },
                    {
                        "notified_code": null,
                        "notified_data_1": "LEAF GROUP LTD.",
                        "notified_data_2": "84, IZTOCNA TANGENTA STR.",
                        "notified_data_3": "1592 SOFIA, BULGARIA",
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    }
                ],
                "shipper_fields": [
                    {
                        "shipper_1": "PHONE: +353 1 469 3189",
                        "shipper_2": "FAX: +353 1 402 9587",
                        "shipper_3": null,
                        "shipper_code": null,
                        "tag": 16
                    },
                    {
                        "shipper_1": "BARCHIP EMEA LTD.",
                        "shipper_2": "CITYWEST BUSINESS CENTRE",
                        "shipper_3": "3013 LAKE DRIVE 24 DUBLIN IRELAND",
                        "shipper_code": null,
                        "tag": 16
                    }
                ]
            },
            "port_place": {
                "bol_port_of_delivery_code": "BGVAR",
                "bol_port_of_delivery_name": "VARNA",
                "bol_port_of_discharge": "BGVAR",
                "final_destination_code": null,
                "final_destination_name": null,
                "optional_ports": [],
                "tag": 13
            }
        },
        {
            "cargo_descriptions": [
                {
                    "cargo_descriptions": [
                        {
                            "cargo_description_1": "SHIPPED ON BOARD VERA RAMBOW",
                            "cargo_description_2": "283 N FROM TALLINN ON",
                            "cargo_description_3": "15/12/2018",
                            "cargo_description_4": null,
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "NET WEIGHT: 200,000 MT",
                            "cargo_description_2": "TOTAL NUMBER OF BUNDLES: 192",
                            "cargo_description_3": "FREETIME AT DESTINATION AS",
                            "cargo_description_4": "AGREED ON CONTRACT",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "8X20'GP CONTAINERS S.T.C.",
                            "cargo_description_2": "LEAD INGOTS",
                            "cargo_description_3": "(MIN. PURITY 99.985%)",
                            "cargo_description_4": "GROSS WEIGHT: 202,112 MT",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        }
                    ],
                    "cargo_fields": {
                        "cargo_code": null,
                        "cargo_measurement": "120",
                        "cargo_sequence_number": 1,
                        "cargo_weight_gross": "202112",
                        "cargo_weight_net": null,
                        "is_cargo_dangerous": false,
                        "number_of_packages": 192,
                        "package_kind_code": "IG",
                        "package_kind_description": "INGOT",
                        "tag": 41,
                        "unknown": "000202112000"
                    },
                    "cargo_in_containers": [
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "15",
                            "container_cargo_weight_kg": "24768",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "IG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "TGBU2315661",
                            "container_number_of_packages": 24,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "048933",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC24768000048933"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "15",
                            "container_cargo_weight_kg": "25405",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "IG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "FCIU5079292",
                            "container_number_of_packages": 24,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "048177",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC25405000048177"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "15",
                            "container_cargo_weight_kg": "25315",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "IG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "TGHU1227573",
                            "container_number_of_packages": 24,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "048153",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC25315000048153"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "15",
                            "container_cargo_weight_kg": "25370",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "IG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "TCLU6849605",
                            "container_number_of_packages": 24,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "048081",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC25370000048081"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "15",
                            "container_cargo_weight_kg": "25206",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "IG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CSLU1853818",
                            "container_number_of_packages": 24,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "048154",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC25206000048154"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "15",
                            "container_cargo_weight_kg": "25302",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "IG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "TEMU2784083",
                            "container_number_of_packages": 24,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "2451570",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC253020002451570"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "15",
                            "container_cargo_weight_kg": "25429",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "IG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CSNU1647603",
                            "container_number_of_packages": 24,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "1559926",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC254290001559926"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "15",
                            "container_cargo_weight_kg": "25317",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "IG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "FCIU5497646",
                            "container_number_of_packages": 24,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "1473088",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC253170001473088"
                        }
                    ],
                    "cargo_marks": [
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "LEAD INGOTS"
                                }
                            ],
                            "tag": 44
                        }
                    ],
                    "dangerous_cargo_desc": {
                        "dangerous_cargo_49_field": {},
                        "dangerous_text": {}
                    }
                }
            ],
            "first_record_of_b_1": {
                "bol_all_empty_ctn": false,
                "bol_all_empty_ctn_code": "N",
                "bol_cycfs_item": "CY-FO",
                "bol_is_transshipment_port": false,
                "bol_is_transshipment_port_code": "N",
                "bol_number": "COEU9003430530",
                "bol_prepaid_or_collect": "Prepaid",
                "bol_prepaid_or_collect_code": "P",
                "loading_date": "2018-12-15",
                "place_of_loading": "DEHAM",
                "place_of_receipt": "SUTAL",
                "pre_vessel_code": "N6L",
                "pre_vessel_name": "SEASPAN JAKARTA",
                "pre_voyage_number": "012S",
                "quarantine_coding": null,
                "shipping_and_carrier_number": "TLL00279001",
                "shipping_order_number": null,
                "tag": 12
            },
            "freight_informations": [
                {
                    "amount": "6000",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "OFT",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "8",
                    "rate_of_freight_charge": "750",
                    "sequence_number": 5,
                    "tag": 61,
                    "unknown": "Y"
                },
                {
                    "amount": "120",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "SSD",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "8",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 4,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "200",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "EBS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "8",
                    "rate_of_freight_charge": "25",
                    "sequence_number": 3,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "35",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "DOC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "35",
                    "sequence_number": 2,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "120",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "AFI",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "8",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 1,
                    "tag": 61,
                    "unknown": null
                }
            ],
            "information_for_reference": {
                "fields_not_in_manifest": {
                    "bol_place_and_date_of_issue": "181226",
                    "bol_place_of_issue": null,
                    "payable_at": null,
                    "prepaid_at": null,
                    "tag": 74
                },
                "in_words": [],
                "other_fields1": [
                    {
                        "tag": 71,
                        "up_remark_1": "PREPAID",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "FREIGHT PREPAID",
                        "up_remark_2": "ON CY-FO TERM",
                        "up_remark_3": "SHIPPER'S LOAD STOW COUNT AND SEAL"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "CSO NUMBER: TLL00279001V2",
                        "up_remark_2": null,
                        "up_remark_3": null
                    }
                ],
                "other_fields2": []
            },
            "parties_concern": {
                "consignee_fields": [
                    {
                        "consignee_1": "UETLIBERGSTR. 231",
                        "consignee_2": "8045 ZURICH, SWITZERLAND",
                        "consignee_3": null,
                        "consignee_code": null,
                        "tag": 21
                    },
                    {
                        "consignee_1": "TO THE ORDER OF",
                        "consignee_2": "CREDIT SUISSE (SWITZERLAND) LTD.",
                        "consignee_3": "COMMODITY TRADE FINANCE, SGAM 33",
                        "consignee_code": null,
                        "tag": 21
                    }
                ],
                "notify_party_fields": [
                    {
                        "notified_code": null,
                        "notified_data_1": "*MR MIHAIL MLADENOV",
                        "notified_data_2": "MIHAIL.MLADENOV@MONBAT.COM",
                        "notified_data_3": "TEL. +359882541584",
                        "notified_party_sequence_number": 2,
                        "tag": 26
                    },
                    {
                        "notified_code": null,
                        "notified_data_1": "MONBAT PLC",
                        "notified_data_2": "32A  CHERNI VRAH",
                        "notified_data_3": "SOFIA 1407  BULGARIA*",
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    }
                ],
                "shipper_fields": [
                    {
                        "shipper_1": "SWITZERLAND",
                        "shipper_2": null,
                        "shipper_3": null,
                        "shipper_code": null,
                        "tag": 16
                    },
                    {
                        "shipper_1": "TIBERIUS GROUP AG",
                        "shipper_2": "DORFSTRASSE 13",
                        "shipper_3": "6340 BAAR",
                        "shipper_code": null,
                        "tag": 16
                    }
                ]
            },
            "port_place": {
                "bol_port_of_delivery_code": "BGVAR",
                "bol_port_of_delivery_name": "VARNA,BG",
                "bol_port_of_discharge": "BGVAR",
                "final_destination_code": null,
                "final_destination_name": null,
                "optional_ports": [],
                "tag": 13
            }
        },
        {
            "cargo_descriptions": [
                {
                    "cargo_descriptions": [
                        {
                            "cargo_description_1": "TOTAL GROSS WEIGHT: 260.832 MT",
                            "cargo_description_2": "TOTAL NUMBER OF BAGS: 5200",
                            "cargo_description_3": "BAGS",
                            "cargo_description_4": null,
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "10X20' S.T.C.",
                            "cargo_description_2": "WHITE CRYSTAL BEET SUGAR (HS",
                            "cargo_description_3": "CODE 170199)",
                            "cargo_description_4": "TOTAL NET WEIGHT: 260 MT",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        }
                    ],
                    "cargo_fields": {
                        "cargo_code": null,
                        "cargo_measurement": null,
                        "cargo_sequence_number": 1,
                        "cargo_weight_gross": "260832",
                        "cargo_weight_net": null,
                        "is_cargo_dangerous": false,
                        "number_of_packages": 5200,
                        "package_kind_code": "BG",
                        "package_kind_description": "BAG",
                        "tag": 41,
                        "unknown": "000260832000"
                    },
                    "cargo_in_containers": [
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "0",
                            "container_cargo_weight_kg": "26083.2",
                            "container_cycfs_item": "FI-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "DFSU1224354",
                            "container_number_of_packages": 520,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "0108808",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC260832000108808"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "0",
                            "container_cargo_weight_kg": "26083.2",
                            "container_cycfs_item": "FI-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CCLU3771657",
                            "container_number_of_packages": 520,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "0108806",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC260832000108806"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "0",
                            "container_cargo_weight_kg": "26083.2",
                            "container_cycfs_item": "FI-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "DFSU1013644",
                            "container_number_of_packages": 520,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "0108805",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC260832000108805"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "0",
                            "container_cargo_weight_kg": "26083.2",
                            "container_cycfs_item": "FI-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "FCIU4905168",
                            "container_number_of_packages": 520,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "0108801",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC260832000108801"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "0",
                            "container_cargo_weight_kg": "26083.2",
                            "container_cycfs_item": "FI-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "UETU2490254",
                            "container_number_of_packages": 520,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "0108804",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC260832000108804"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "0",
                            "container_cargo_weight_kg": "26083.2",
                            "container_cycfs_item": "FI-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "TCLU1945550",
                            "container_number_of_packages": 520,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "0108803",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC260832000108803"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "0",
                            "container_cargo_weight_kg": "26083.2",
                            "container_cycfs_item": "FI-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CSLU1035494",
                            "container_number_of_packages": 520,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "0108809",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC260832000108809"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "0",
                            "container_cargo_weight_kg": "26083.2",
                            "container_cycfs_item": "FI-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "OOLU1716430",
                            "container_number_of_packages": 520,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "0108802",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC260832000108802"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "0",
                            "container_cargo_weight_kg": "26083.2",
                            "container_cycfs_item": "FI-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CSLU1260561",
                            "container_number_of_packages": 520,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "0129769",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC260832000129769"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "0",
                            "container_cargo_weight_kg": "26083.2",
                            "container_cycfs_item": "FI-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "DFSU1035860",
                            "container_number_of_packages": 520,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "0108810",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC260832000108810"
                        }
                    ],
                    "cargo_marks": [
                        {
                            "cargo_sequence_number": 1,
                            "marks": [],
                            "tag": 44
                        },
                        {
                            "cargo_sequence_number": 1,
                            "marks": [],
                            "tag": 44
                        }
                    ],
                    "dangerous_cargo_desc": {
                        "dangerous_cargo_49_field": {},
                        "dangerous_text": {}
                    }
                }
            ],
            "first_record_of_b_1": {
                "bol_all_empty_ctn": false,
                "bol_all_empty_ctn_code": "N",
                "bol_cycfs_item": "FI-FO",
                "bol_is_transshipment_port": false,
                "bol_is_transshipment_port_code": "N",
                "bol_number": "COEU9002822750",
                "bol_prepaid_or_collect": "Collect",
                "bol_prepaid_or_collect_code": "C",
                "loading_date": "2019-01-21",
                "place_of_loading": "SUODE",
                "place_of_receipt": "SUODE",
                "pre_vessel_code": "UT9",
                "pre_vessel_name": "AS FLORIANA",
                "pre_voyage_number": "042S",
                "quarantine_coding": null,
                "shipping_and_carrier_number": "VRA00266001",
                "shipping_order_number": null,
                "tag": 12
            },
            "freight_informations": [
                {
                    "amount": "2000",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "OFT",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "10",
                    "rate_of_freight_charge": "200",
                    "sequence_number": 6,
                    "tag": 61,
                    "unknown": "Y"
                },
                {
                    "amount": "150",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "SSL",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "10",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 5,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "150",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "SSD",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "10",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 4,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "25",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ENS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "25",
                    "sequence_number": 3,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "300",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "EBS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "10",
                    "rate_of_freight_charge": "30",
                    "sequence_number": 2,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "150",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "AFI",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "10",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 1,
                    "tag": 61,
                    "unknown": null
                }
            ],
            "information_for_reference": {
                "fields_not_in_manifest": {
                    "bol_place_and_date_of_issue": "190121",
                    "bol_place_of_issue": null,
                    "payable_at": null,
                    "prepaid_at": null,
                    "tag": 74
                },
                "in_words": [],
                "other_fields1": [
                    {
                        "tag": 71,
                        "up_remark_1": "COLLECT",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "OCEAN FREIGHT COLLECT",
                        "up_remark_2": "ON FI-FO TERM",
                        "up_remark_3": "SHIPPER'S LOAD STOW COUNT AND SEAL"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "CSO NUMBER: VRA00266001V1",
                        "up_remark_2": null,
                        "up_remark_3": null
                    }
                ],
                "other_fields2": []
            },
            "parties_concern": {
                "consignee_fields": [
                    {
                        "consignee_1": "TO ORDER",
                        "consignee_2": null,
                        "consignee_3": null,
                        "consignee_code": null,
                        "tag": 21
                    }
                ],
                "notify_party_fields": [
                    {
                        "notified_code": null,
                        "notified_data_1": "BULGARIA",
                        "notified_data_2": null,
                        "notified_data_3": null,
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    },
                    {
                        "notified_code": null,
                        "notified_data_1": "PROLOGISTIC BG LIMITED",
                        "notified_data_2": "15 BATAK STREET",
                        "notified_data_3": "VARNA, VARNA",
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    }
                ],
                "shipper_fields": [
                    {
                        "shipper_1": "NYTSIA REGION, 24600 UKRAINE",
                        "shipper_2": null,
                        "shipper_3": null,
                        "shipper_code": null,
                        "tag": 16
                    },
                    {
                        "shipper_1": "\"PODILLYA FOODS COMPANY\" PJSC",
                        "shipper_2": "74-A, YURIYA TIUTIUNNYKA STR., UTS",
                        "shipper_3": "KRYZHOPIL, KRYZHOPIL  DISTRICT, VIN",
                        "shipper_code": null,
                        "tag": 16
                    }
                ]
            },
            "port_place": {
                "bol_port_of_delivery_code": "BGVAR",
                "bol_port_of_delivery_name": "VARNA,",
                "bol_port_of_discharge": "BGVAR",
                "final_destination_code": null,
                "final_destination_name": null,
                "optional_ports": [],
                "tag": 13
            }
        },
        {
            "cargo_descriptions": [
                {
                    "cargo_descriptions": [
                        {
                            "cargo_description_1": "FROZEN MACKEREL",
                            "cargo_description_2": "NET WEIGHT:24354.00 KGS",
                            "cargo_description_3": "TEMP:-20C SET BY SHIPPER",
                            "cargo_description_4": null,
                            "cargo_sequence_number": 1,
                            "tag": 47
                        }
                    ],
                    "cargo_fields": {
                        "cargo_code": null,
                        "cargo_measurement": null,
                        "cargo_sequence_number": 1,
                        "cargo_weight_gross": "25542",
                        "cargo_weight_net": null,
                        "is_cargo_dangerous": false,
                        "number_of_packages": 1188,
                        "package_kind_code": "CT",
                        "package_kind_description": "CARTON",
                        "tag": 41,
                        "unknown": "000025542000"
                    },
                    "cargo_in_containers": [
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "0",
                            "container_cargo_weight_kg": "25542",
                            "container_cycfs_item": "FI-FO",
                            "container_kind_of_packages": "CT",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CXRU1546265",
                            "container_number_of_packages": 1188,
                            "container_size_and_type_iso_code": "4532",
                            "container_tare_weight_kg": "4000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "6888779",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "RF255420006888779"
                        }
                    ],
                    "cargo_marks": [
                        {
                            "cargo_sequence_number": 1,
                            "marks": [],
                            "tag": 44
                        }
                    ],
                    "dangerous_cargo_desc": {
                        "dangerous_cargo_49_field": {},
                        "dangerous_text": {
                            "cargo_sequence_number": 1,
                            "class": null,
                            "ems_number": null,
                            "flash_point": null,
                            "is_marine_pollutant": null,
                            "label_1": "                ",
                            "label_2": "                ",
                            "medical_first_aid_guide": null,
                            "page": null,
                            "tag": 43,
                            "temperature_from": "-20",
                            "temperature_measure": "Celsius",
                            "temperature_measure_code": "C",
                            "temperature_to": "-20",
                            "un_number": null
                        }
                    }
                }
            ],
            "first_record_of_b_1": {
                "bol_all_empty_ctn": false,
                "bol_all_empty_ctn_code": "N",
                "bol_cycfs_item": "FI-FO",
                "bol_is_transshipment_port": false,
                "bol_is_transshipment_port_code": "N",
                "bol_number": "COEU9000606890",
                "bol_prepaid_or_collect": "Prepaid",
                "bol_prepaid_or_collect_code": "P",
                "loading_date": "2018-12-30",
                "place_of_loading": "MRNBU",
                "place_of_receipt": "MRNBU",
                "pre_vessel_code": "CCU",
                "pre_vessel_name": "COSCO DENMARK",
                "pre_voyage_number": "026E",
                "quarantine_coding": null,
                "shipping_and_carrier_number": "SCT00499003",
                "shipping_order_number": null,
                "tag": 12
            },
            "freight_informations": [
                {
                    "amount": "2900",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "OFT",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "2900",
                    "sequence_number": 6,
                    "tag": 61,
                    "unknown": "Y"
                },
                {
                    "amount": "15",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "SSD",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 5,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "90",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "FAF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "90",
                    "sequence_number": 4,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "25",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ENS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "25",
                    "sequence_number": 3,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "50",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "EBS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "50",
                    "sequence_number": 2,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "15",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "AFI",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 1,
                    "tag": 61,
                    "unknown": null
                }
            ],
            "information_for_reference": {
                "fields_not_in_manifest": {
                    "bol_place_and_date_of_issue": "181230",
                    "bol_place_of_issue": null,
                    "payable_at": null,
                    "prepaid_at": null,
                    "tag": 74
                },
                "in_words": [],
                "other_fields1": [
                    {
                        "tag": 71,
                        "up_remark_1": "OCEAN FREIGHT PREPAID",
                        "up_remark_2": "ON FI-FO TERM",
                        "up_remark_3": "SHIPPER'S LOAD STOW COUNT AND SEAL"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "CSO NUMBER: SCT00499003V1",
                        "up_remark_2": null,
                        "up_remark_3": null
                    }
                ],
                "other_fields2": []
            },
            "parties_concern": {
                "consignee_fields": [
                    {
                        "consignee_1": "BULGARIA",
                        "consignee_2": null,
                        "consignee_3": null,
                        "consignee_code": null,
                        "tag": 21
                    },
                    {
                        "consignee_1": "DIAVENA LTD",
                        "consignee_2": "INDUSRIALNA STR.23A",
                        "consignee_3": "9700 SHUMEN",
                        "consignee_code": null,
                        "tag": 21
                    }
                ],
                "notify_party_fields": [
                    {
                        "notified_code": null,
                        "notified_data_1": "BULGARIA",
                        "notified_data_2": null,
                        "notified_data_3": null,
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    },
                    {
                        "notified_code": null,
                        "notified_data_1": "DIAVENA LTD",
                        "notified_data_2": "INDUSRIALNA STR.23A",
                        "notified_data_3": "9700 SHUMEN",
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    }
                ],
                "shipper_fields": [
                    {
                        "shipper_1": "S.M.C.P-SA BP 259",
                        "shipper_2": "NOUADHIBOU, MAURITANIA",
                        "shipper_3": "P/C SOREC",
                        "shipper_code": null,
                        "tag": 16
                    }
                ]
            },
            "port_place": {
                "bol_port_of_delivery_code": "BGVAR",
                "bol_port_of_delivery_name": "VARNA,",
                "bol_port_of_discharge": "BGVAR",
                "final_destination_code": null,
                "final_destination_name": null,
                "optional_ports": [],
                "tag": 13
            }
        },
        {
            "cargo_descriptions": [
                {
                    "cargo_descriptions": [
                        {
                            "cargo_description_1": "CPTC THERMISTOR",
                            "cargo_description_2": "ZINC OXIDE VARISTOR\"",
                            "cargo_description_3": "CHOKE",
                            "cargo_description_4": "CONNECTORS",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "INDUCTIVE COMPONENTS",
                            "cargo_description_2": "CONNECTORS",
                            "cargo_description_3": "\"GAS DISCHARGE TUBE",
                            "cargo_description_4": "NTC THERMISTOR",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        }
                    ],
                    "cargo_fields": {
                        "cargo_code": null,
                        "cargo_measurement": "34.497",
                        "cargo_sequence_number": 1,
                        "cargo_weight_gross": "8985.2",
                        "cargo_weight_net": null,
                        "is_cargo_dangerous": false,
                        "number_of_packages": 27,
                        "package_kind_code": "PL",
                        "package_kind_description": "PALLET",
                        "tag": 41,
                        "unknown": "000008985260"
                    },
                    "cargo_in_containers": [
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "34.497",
                            "container_cargo_weight_kg": "8985.2",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "PL",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CCLU5072366",
                            "container_number_of_packages": 27,
                            "container_size_and_type_iso_code": "4310",
                            "container_tare_weight_kg": "4000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "CH327112",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC08985260CH327112"
                        }
                    ],
                    "cargo_marks": [
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "OSRAM"
                                }
                            ],
                            "tag": 44
                        }
                    ],
                    "dangerous_cargo_desc": {
                        "dangerous_cargo_49_field": {},
                        "dangerous_text": {}
                    }
                }
            ],
            "first_record_of_b_1": {
                "bol_all_empty_ctn": false,
                "bol_all_empty_ctn_code": "N",
                "bol_cycfs_item": "CY-FO",
                "bol_is_transshipment_port": false,
                "bol_is_transshipment_port_code": "N",
                "bol_number": "COSU6203231420W",
                "bol_prepaid_or_collect": "Collect",
                "bol_prepaid_or_collect_code": "C",
                "loading_date": "2019-01-06",
                "place_of_loading": "CNSHA",
                "place_of_receipt": "CNSHA",
                "pre_vessel_code": "CSE",
                "pre_vessel_name": "COSCO SHIPPING SAGIT",
                "pre_voyage_number": "002W",
                "quarantine_coding": null,
                "shipping_and_carrier_number": "ENF92200",
                "shipping_order_number": null,
                "tag": 12
            },
            "freight_informations": [
                {
                    "amount": "1900",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "OFT",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "1900",
                    "sequence_number": 12,
                    "tag": 61,
                    "unknown": "Y"
                },
                {
                    "amount": "1034",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "THC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "1034",
                    "sequence_number": 11,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "30",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "SLF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "30",
                    "sequence_number": 10,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "15",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "PSL",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 9,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "10",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "PSF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "10",
                    "sequence_number": 8,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "280",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "MIS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "280",
                    "sequence_number": 7,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "188",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "FAF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "188",
                    "sequence_number": 6,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "25",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ENS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "25",
                    "sequence_number": 5,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "30",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "EIR",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "30",
                    "sequence_number": 4,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "450",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "DOC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "450",
                    "sequence_number": 3,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "5",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "CAS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "5",
                    "sequence_number": 2,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "15",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "AFI",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 1,
                    "tag": 61,
                    "unknown": null
                }
            ],
            "information_for_reference": {
                "fields_not_in_manifest": {
                    "bol_place_and_date_of_issue": "190106",
                    "bol_place_of_issue": null,
                    "payable_at": null,
                    "prepaid_at": null,
                    "tag": 74
                },
                "in_words": [],
                "other_fields1": [
                    {
                        "tag": 71,
                        "up_remark_1": "HS : 85045000 8536901900 85334000 8",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "COLLECT",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "COMBINE:COSU6203231420",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "FREIGHT COLLECT",
                        "up_remark_2": "COSU6203231420/",
                        "up_remark_3": "COSU620323142001-04/"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "ON CY-FO TERM",
                        "up_remark_2": "SHIPPER'S LOAD STOW COUNT AND SEAL",
                        "up_remark_3": "OCEAN FREIGHT COLLECT"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "SEAWAY BILL ISSUED",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "CSO NUMBER: ENF92200",
                        "up_remark_2": null,
                        "up_remark_3": null
                    }
                ],
                "other_fields2": []
            },
            "parties_concern": {
                "consignee_fields": [
                    {
                        "consignee_1": "BULGARIA",
                        "consignee_2": null,
                        "consignee_3": null,
                        "consignee_code": null,
                        "tag": 21
                    },
                    {
                        "consignee_1": "SCHENKER EOOD BULGARIA",
                        "consignee_2": "1-A, EUROPE BLVD",
                        "consignee_3": "BG-2227 BOZHURISHTE",
                        "consignee_code": null,
                        "tag": 21
                    }
                ],
                "notify_party_fields": [
                    {
                        "notified_code": null,
                        "notified_data_1": "BULGARIA",
                        "notified_data_2": null,
                        "notified_data_3": null,
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    },
                    {
                        "notified_code": null,
                        "notified_data_1": "SCHENKER EOOD BULGARIA",
                        "notified_data_2": "1-A, EUROPE BLVD",
                        "notified_data_3": "BG-2227 BOZHURISHTE",
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    }
                ],
                "shipper_fields": [
                    {
                        "shipper_1": "SHANGHAI 200001 P.R.CHINA",
                        "shipper_2": "+86-21-61708888",
                        "shipper_3": null,
                        "shipper_code": null,
                        "tag": 16
                    },
                    {
                        "shipper_1": "SCHENKER CHINA LTD",
                        "shipper_2": "7TH FL.,RAFFLES CITY,",
                        "shipper_3": "NO.268,XI ZANG ZHONG ROAD,",
                        "shipper_code": null,
                        "tag": 16
                    }
                ]
            },
            "port_place": {
                "bol_port_of_delivery_code": "BGVAR",
                "bol_port_of_delivery_name": "VARNA,BG",
                "bol_port_of_discharge": "BGVAR",
                "final_destination_code": null,
                "final_destination_name": null,
                "optional_ports": [],
                "tag": 13
            }
        },
        {
            "cargo_descriptions": [
                {
                    "cargo_descriptions": [
                        {
                            "cargo_description_1": "*1010601021608",
                            "cargo_description_2": "**EMAIL:DANIELA.GLAVCHEVA@",
                            "cargo_description_3": "DHL.COM UIC+BG205178651",
                            "cargo_description_4": null,
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "8701.92",
                            "cargo_description_2": "8429.52",
                            "cargo_description_3": "8432.80",
                            "cargo_description_4": "COUNTRY OF ORIGIN : JAPAN",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "12 SETS OF USED FARM TRACTORS",
                            "cargo_description_2": "1 UNIT OF USED FARM TRACTORS",
                            "cargo_description_3": "1 UNIT OF USED EXCAVATORS",
                            "cargo_description_4": "HS CODE:8701.91",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        }
                    ],
                    "cargo_fields": {
                        "cargo_code": null,
                        "cargo_measurement": "50",
                        "cargo_sequence_number": 1,
                        "cargo_weight_gross": "13630",
                        "cargo_weight_net": null,
                        "is_cargo_dangerous": false,
                        "number_of_packages": 14,
                        "package_kind_code": "PC",
                        "package_kind_description": "PIECE",
                        "tag": 41,
                        "unknown": "000013630000"
                    },
                    "cargo_in_containers": [
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "50",
                            "container_cargo_weight_kg": "13630",
                            "container_cycfs_item": "CY-CY",
                            "container_kind_of_packages": "PC",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "FSCU8682040",
                            "container_number_of_packages": 14,
                            "container_size_and_type_iso_code": "4510",
                            "container_tare_weight_kg": "4000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "8922393",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC136300008922393"
                        }
                    ],
                    "cargo_marks": [
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "N/M"
                                }
                            ],
                            "tag": 44
                        }
                    ],
                    "dangerous_cargo_desc": {
                        "dangerous_cargo_49_field": {},
                        "dangerous_text": {}
                    }
                }
            ],
            "first_record_of_b_1": {
                "bol_all_empty_ctn": false,
                "bol_all_empty_ctn_code": "N",
                "bol_cycfs_item": "CY-CY",
                "bol_is_transshipment_port": false,
                "bol_is_transshipment_port_code": "N",
                "bol_number": "COSU6198324190W",
                "bol_prepaid_or_collect": "Prepaid",
                "bol_prepaid_or_collect_code": "P",
                "loading_date": "2018-12-26",
                "place_of_loading": "JPHKA",
                "place_of_receipt": "JPHKA",
                "pre_vessel_code": "CSE",
                "pre_vessel_name": "COSCO SHIPPING SAGIT",
                "pre_voyage_number": "002W",
                "quarantine_coding": null,
                "shipping_and_carrier_number": "TYO05064006",
                "shipping_order_number": null,
                "tag": 12
            },
            "freight_informations": [
                {
                    "amount": "1500",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "OFT",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": "JPTOK",
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "1500",
                    "sequence_number": 8,
                    "tag": 61,
                    "unknown": "Y"
                },
                {
                    "amount": "41000",
                    "currency": "JPY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "THC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": "JPTOK",
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "41000",
                    "sequence_number": 7,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "10",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "PSF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "10",
                    "sequence_number": 6,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "25",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ENS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": "JPTOK",
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "25",
                    "sequence_number": 5,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "3000",
                    "currency": "JPY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "DOC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": "JPTOK",
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "3000",
                    "sequence_number": 4,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "5",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "CAS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "5",
                    "sequence_number": 3,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "100",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "AMF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": "JPTOK",
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "100",
                    "sequence_number": 2,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "15",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "AFI",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 1,
                    "tag": 61,
                    "unknown": null
                }
            ],
            "information_for_reference": {
                "fields_not_in_manifest": {
                    "bol_place_and_date_of_issue": "181226",
                    "bol_place_of_issue": null,
                    "payable_at": null,
                    "prepaid_at": null,
                    "tag": 74
                },
                "in_words": [],
                "other_fields1": [
                    {
                        "tag": 71,
                        "up_remark_1": "F",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "SHIPPER'S LOAD STOW COUNT AND SEAL",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "OCEAN FREIGHT PREPAID",
                        "up_remark_2": "FREIGHT PREPAID",
                        "up_remark_3": "ON CY-CY TERM"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "SEAWAY BILL ISSUED",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "CSO NUMBER: TYO05064006V1",
                        "up_remark_2": null,
                        "up_remark_3": null
                    }
                ],
                "other_fields2": []
            },
            "parties_concern": {
                "consignee_fields": [
                    {
                        "consignee_1": "TEL:+359 2 970 80 37",
                        "consignee_2": "ATTN:DANIELA GLAVCHEVA**",
                        "consignee_3": null,
                        "consignee_code": null,
                        "tag": 21
                    },
                    {
                        "consignee_1": "DHL LOGISTICS BULGARIA EOOD",
                        "consignee_2": "94, IZTOCHNA TANGENTA STR.",
                        "consignee_3": "1528 SOFIA, BULGARIA",
                        "consignee_code": null,
                        "tag": 21
                    }
                ],
                "notify_party_fields": [
                    {
                        "notified_code": null,
                        "notified_data_1": "1528 SOFIA, BULGARIA",
                        "notified_data_2": "TEL:+359 2 970 80 37 **",
                        "notified_data_3": null,
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    },
                    {
                        "notified_code": null,
                        "notified_data_1": "DHL GLOBAL FORWARDING BULGARIA",
                        "notified_data_2": "C/O DHL LOGISTICS BULGARIA EOOD",
                        "notified_data_3": "94, IZTOCHNA TANGENTA STR.",
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    }
                ],
                "shipper_fields": [
                    {
                        "shipper_1": "FUKUOKA 812-0005 JAPAN",
                        "shipper_2": "TEL:092-477-0411 FAX:092-477-0420*",
                        "shipper_3": null,
                        "shipper_code": null,
                        "tag": 16
                    },
                    {
                        "shipper_1": "DHL GLOBAL FORWARDING JAPAN K.K.",
                        "shipper_2": "302 FUKUOKA AIRPORT INT'L CARGO",
                        "shipper_3": "BLDG.623 OAZA-KAMIUSUI HAKATA-KU,",
                        "shipper_code": null,
                        "tag": 16
                    }
                ]
            },
            "port_place": {
                "bol_port_of_delivery_code": "BGVAR",
                "bol_port_of_delivery_name": "VARNA",
                "bol_port_of_discharge": "BGVAR",
                "final_destination_code": null,
                "final_destination_name": null,
                "optional_ports": [],
                "tag": 13
            }
        },
        {
            "cargo_descriptions": [
                {
                    "cargo_descriptions": [
                        {
                            "cargo_description_1": "M:+359 885355020",
                            "cargo_description_2": "F:+359 52818340",
                            "cargo_description_3": null,
                            "cargo_description_4": null,
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "M:+359 879288831",
                            "cargo_description_2": "**EMAIL:IVAN.KOLEV@UNIMASTERS.",
                            "cargo_description_3": "COM",
                            "cargo_description_4": "T:+ 359 52818321",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "WOOL TOPS",
                            "cargo_description_2": "FREIGHT PREPAID",
                            "cargo_description_3": "*CONTACT PERSON:",
                            "cargo_description_4": "KATYA ARNAUDOVA",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        }
                    ],
                    "cargo_fields": {
                        "cargo_code": null,
                        "cargo_measurement": "144",
                        "cargo_sequence_number": 1,
                        "cargo_weight_gross": "43305.4",
                        "cargo_weight_net": null,
                        "is_cargo_dangerous": false,
                        "number_of_packages": 144,
                        "package_kind_code": "BL",
                        "package_kind_description": "BALE",
                        "tag": 41,
                        "unknown": "000043305400"
                    },
                    "cargo_in_containers": [
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "72",
                            "container_cargo_weight_kg": "21655.8",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BL",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CBHU9049718",
                            "container_number_of_packages": 72,
                            "container_size_and_type_iso_code": "4510",
                            "container_tare_weight_kg": "4000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "X245530",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC21655800X245530"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "72",
                            "container_cargo_weight_kg": "21649.6",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BL",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CBHU8122033",
                            "container_number_of_packages": 72,
                            "container_size_and_type_iso_code": "4510",
                            "container_tare_weight_kg": "4000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "X245539",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC21649600X245539"
                        }
                    ],
                    "cargo_marks": [
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "LW6992"
                                }
                            ],
                            "tag": 44
                        }
                    ],
                    "dangerous_cargo_desc": {
                        "dangerous_cargo_49_field": {},
                        "dangerous_text": {}
                    }
                }
            ],
            "first_record_of_b_1": {
                "bol_all_empty_ctn": false,
                "bol_all_empty_ctn_code": "N",
                "bol_cycfs_item": "CY-FO",
                "bol_is_transshipment_port": false,
                "bol_is_transshipment_port_code": "N",
                "bol_number": "COSU6198221380",
                "bol_prepaid_or_collect": "Prepaid",
                "bol_prepaid_or_collect_code": "P",
                "loading_date": "2018-12-08",
                "place_of_loading": "CNZJG",
                "place_of_receipt": "CNZJG",
                "pre_vessel_code": "CNF",
                "pre_vessel_name": "COSCO SHIPPING LEO",
                "pre_voyage_number": "004W",
                "quarantine_coding": null,
                "shipping_and_carrier_number": "SHA66096002",
                "shipping_order_number": null,
                "tag": 12
            },
            "freight_informations": [
                {
                    "amount": "3500",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "OFT",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "2",
                    "rate_of_freight_charge": "1750",
                    "sequence_number": 12,
                    "tag": 61,
                    "unknown": "Y"
                },
                {
                    "amount": "2302",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "THC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "2",
                    "rate_of_freight_charge": "1151",
                    "sequence_number": 11,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "60",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "SLF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "2",
                    "rate_of_freight_charge": "30",
                    "sequence_number": 10,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "30",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "PSL",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "2",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 9,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "20",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "PSF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "2",
                    "rate_of_freight_charge": "10",
                    "sequence_number": 8,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "25",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ENS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "25",
                    "sequence_number": 7,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "60",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "EEC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "2",
                    "rate_of_freight_charge": "30",
                    "sequence_number": 6,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "450",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "DOC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "450",
                    "sequence_number": 5,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "320",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "CLS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "2",
                    "rate_of_freight_charge": "160",
                    "sequence_number": 4,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "10",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "CAS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "2",
                    "rate_of_freight_charge": "5",
                    "sequence_number": 3,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "200",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ARB",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "2",
                    "rate_of_freight_charge": "100",
                    "sequence_number": 2,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "30",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "AFI",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "2",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 1,
                    "tag": 61,
                    "unknown": null
                }
            ],
            "information_for_reference": {
                "fields_not_in_manifest": {
                    "bol_place_and_date_of_issue": "181208",
                    "bol_place_of_issue": null,
                    "payable_at": null,
                    "prepaid_at": null,
                    "tag": 74
                },
                "in_words": [],
                "other_fields1": [
                    {
                        "tag": 71,
                        "up_remark_1": "PREPAID",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "PHONE: 30-210-4290810",
                        "up_remark_2": "FAX:   30-210-4290808",
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "COSCO SHIPPING LINES (GREECE) S.A.",
                        "up_remark_2": "85,AKTI MIAOULI & 2,FLESSA STR",
                        "up_remark_3": "18538 PIRAEUS GREECE"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "ON CY-FO TERM",
                        "up_remark_2": "SHIPPER'S LOAD STOW COUNT AND SEAL",
                        "up_remark_3": "OCEAN FREIGHT PREPAID"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "CSO NUMBER: SHA66096002V16",
                        "up_remark_2": null,
                        "up_remark_3": null
                    }
                ],
                "other_fields2": []
            },
            "parties_concern": {
                "consignee_fields": [
                    {
                        "consignee_1": "INDUSTRIAL ZONE DINAMO",
                        "consignee_2": "18A BANSKO SHOSSE STR.*",
                        "consignee_3": null,
                        "consignee_code": null,
                        "tag": 21
                    },
                    {
                        "consignee_1": "LEMPRIERE WOOL EOOD",
                        "consignee_2": "VAT NUMBER:BG202900687",
                        "consignee_3": "BULGARIA,SLIVEN 8800,",
                        "consignee_code": null,
                        "tag": 21
                    }
                ],
                "notify_party_fields": [
                    {
                        "notified_code": null,
                        "notified_data_1": "BG-9000 VARNA, BULGARIA",
                        "notified_data_2": "CONTACT PERSON: IVAN KOLEV**",
                        "notified_data_3": null,
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    },
                    {
                        "notified_code": null,
                        "notified_data_1": "UNIMASTERS LOGISTICS SCS LTD",
                        "notified_data_2": "MARINE HOUSE",
                        "notified_data_3": "40,GRAF IGNAT STREET",
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    }
                ],
                "shipper_fields": [
                    {
                        "shipper_1": "MODY ROAD,TSIMSHATSUI, KOWLOON,",
                        "shipper_2": "HONGKONG.",
                        "shipper_3": null,
                        "shipper_code": null,
                        "tag": 16
                    },
                    {
                        "shipper_1": "FOREVER WINNER INTERNATIONAL",
                        "shipper_2": "DEVELOPMENT LIMITED.",
                        "shipper_3": "ROOM 1201,12/F EMPIRE CENTRE 68",
                        "shipper_code": null,
                        "tag": 16
                    }
                ]
            },
            "port_place": {
                "bol_port_of_delivery_code": "BGVAR",
                "bol_port_of_delivery_name": "VARNA",
                "bol_port_of_discharge": "BGVAR",
                "final_destination_code": null,
                "final_destination_name": null,
                "optional_ports": [],
                "tag": 13
            }
        },
        {
            "cargo_descriptions": [
                {
                    "cargo_descriptions": [
                        {
                            "cargo_description_1": "HS CODE:85340090",
                            "cargo_description_2": null,
                            "cargo_description_3": null,
                            "cargo_description_4": null,
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "INVOICE",
                            "cargo_description_2": "NO:NL19010001,NL19010002,NL",
                            "cargo_description_3": "19010003,",
                            "cargo_description_4": "NL19010004",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "INVOICE NO.07-920181224(478)",
                            "cargo_description_2": "HS CODE:9405990000",
                            "cargo_description_3": "PRINTED CIRCUIT BOARD",
                            "cargo_description_4": "0600048750-1 6200004695",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "6200004781MC-HEAT SINK 2-OT90",
                            "cargo_description_2": "4DIM",
                            "cargo_description_3": "68X25X1.5 AL",
                            "cargo_description_4": "31500=15CTNS",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "4DIM",
                            "cargo_description_2": "40X25X1.5 AL",
                            "cargo_description_3": "54000=15CTNS",
                            "cargo_description_4": "PO#0600047139-1",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": ".7X0.4 ALU",
                            "cargo_description_2": "4320=1CTN",
                            "cargo_description_3": "PO#0600047174-1",
                            "cargo_description_4": "6200004780MC-HEAT SINK 1-OT75",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "44000=10CTNS",
                            "cargo_description_2": "PO#0600047140-1",
                            "cargo_description_3": "6200004237MC-HEATSINK-LAYIN-44",
                            "cargo_description_4": ".2X37",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "PO#0600047771-1",
                            "cargo_description_2": "6200002748MC-HEAT SINK 1-OT60",
                            "cargo_description_3": "4DIM",
                            "cargo_description_4": "47.2X25X1.5 AL",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "6200002720MC-BASE-PT-FIT-GENLL",
                            "cargo_description_2": "-110X",
                            "cargo_description_3": "75X30 STL",
                            "cargo_description_4": "39312=312CTNS",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "PO#0600047141-1/0600047142-1/0",
                            "cargo_description_2": "60004",
                            "cargo_description_3": "7151-1/",
                            "cargo_description_4": "0600047152-1",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "6200002686MC-BASE-PTI 35/701",
                            "cargo_description_2": "2ND 11",
                            "cargo_description_3": "0X75X30 STL",
                            "cargo_description_4": "5632=11CTNS",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "21X0.",
                            "cargo_description_2": "40-PPGI",
                            "cargo_description_3": "7659=23CTNS",
                            "cargo_description_4": "PO#0600047138-1",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "-ALU",
                            "cargo_description_2": "4860=54CTNS",
                            "cargo_description_3": "PO#0600047124-1/0600047761-1",
                            "cargo_description_4": "6200002661MC-COVER-QTI-425X30X",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "ODUCTS",
                            "cargo_description_2": "PO#0600047121-1/0600047137-1",
                            "cargo_description_3": "6200002651MC-COVER-PTI150-150X",
                            "cargo_description_4": "85X31",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "PLASTIC PARTS",
                            "cargo_description_2": "HS CODE:3926909090",
                            "cargo_description_3": "PPGI COVER AND BASE FOR",
                            "cargo_description_4": "LIGHTING PR",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "PLASTIC PARTS",
                            "cargo_description_2": "HS CODE:3926909090",
                            "cargo_description_3": "PLASTIC PARTS",
                            "cargo_description_4": "HS CODE:3926909090",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "BARE PRINTED CIRCUIT BOARD",
                            "cargo_description_2": "250CARTONS=10PALLETS",
                            "cargo_description_3": "INVOICE NO:2018122401",
                            "cargo_description_4": "HS CODE:85340090",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        }
                    ],
                    "cargo_fields": {
                        "cargo_code": null,
                        "cargo_measurement": "36.65",
                        "cargo_sequence_number": 1,
                        "cargo_weight_gross": "8173",
                        "cargo_weight_net": null,
                        "is_cargo_dangerous": false,
                        "number_of_packages": 28,
                        "package_kind_code": "PL",
                        "package_kind_description": "PALLET",
                        "tag": 41,
                        "unknown": "000008173000"
                    },
                    "cargo_in_containers": [
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "36.65",
                            "container_cargo_weight_kg": "8173",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "PL",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CLHU4631095",
                            "container_number_of_packages": 28,
                            "container_size_and_type_iso_code": "4310",
                            "container_tare_weight_kg": "4000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10216134",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC0817300010216134"
                        }
                    ],
                    "cargo_marks": [
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "C/NO.1-1"
                                }
                            ],
                            "tag": 44
                        },
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "C/NO.1-1"
                                },
                                {
                                    "key": null,
                                    "value": "OSRAM(BULGARIA)"
                                },
                                {
                                    "key": null,
                                    "value": "LOT NO.K-S-3152"
                                },
                                {
                                    "key": null,
                                    "value": "C/NO.1-1"
                                },
                                {
                                    "key": null,
                                    "value": "OSRAM(BULGARIA)"
                                },
                                {
                                    "key": null,
                                    "value": "LOT NO.K-S-3153"
                                }
                            ],
                            "tag": 44
                        },
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "0600049015-1/72"
                                },
                                {
                                    "key": null,
                                    "value": "00PCS"
                                },
                                {
                                    "key": null,
                                    "value": "JUFU INDUSTRIAL"
                                },
                                {
                                    "key": null,
                                    "value": "(HK)CO.,LTD"
                                },
                                {
                                    "key": null,
                                    "value": "OSRAM(BULGARIA)"
                                },
                                {
                                    "key": null,
                                    "value": "LOT NO.K-S-3151"
                                }
                            ],
                            "tag": 44
                        },
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "0600049031-1/32"
                                },
                                {
                                    "key": null,
                                    "value": "00PCS"
                                },
                                {
                                    "key": null,
                                    "value": "0600049079-1/11"
                                },
                                {
                                    "key": null,
                                    "value": "880PCS"
                                },
                                {
                                    "key": null,
                                    "value": "0600049024-1/24"
                                },
                                {
                                    "key": null,
                                    "value": "840PCS"
                                }
                            ],
                            "tag": 44
                        },
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "0600047582-1/19"
                                },
                                {
                                    "key": null,
                                    "value": "200PCS"
                                },
                                {
                                    "key": null,
                                    "value": "0600049823-1/36"
                                },
                                {
                                    "key": null,
                                    "value": "00PCS"
                                },
                                {
                                    "key": null,
                                    "value": "0600048052-1/58"
                                },
                                {
                                    "key": null,
                                    "value": "500PCS"
                                }
                            ],
                            "tag": 44
                        },
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "49108-49109"
                                },
                                {
                                    "key": null,
                                    "value": "49110"
                                },
                                {
                                    "key": null,
                                    "value": "49313-49316"
                                },
                                {
                                    "key": null,
                                    "value": "49309-49312"
                                },
                                {
                                    "key": null,
                                    "value": "49317-49318"
                                },
                                {
                                    "key": null,
                                    "value": "49319"
                                }
                            ],
                            "tag": 44
                        }
                    ],
                    "dangerous_cargo_desc": {
                        "dangerous_cargo_49_field": {},
                        "dangerous_text": {}
                    }
                }
            ],
            "first_record_of_b_1": {
                "bol_all_empty_ctn": false,
                "bol_all_empty_ctn_code": "N",
                "bol_cycfs_item": "CY-FO",
                "bol_is_transshipment_port": false,
                "bol_is_transshipment_port_code": "N",
                "bol_number": "COSU6196627920W",
                "bol_prepaid_or_collect": "Collect",
                "bol_prepaid_or_collect_code": "C",
                "loading_date": "2019-01-10",
                "place_of_loading": "CNYTN",
                "place_of_receipt": "CNYTN",
                "pre_vessel_code": "NH2",
                "pre_vessel_name": "TAMPA TRIUMPH",
                "pre_voyage_number": "011W",
                "quarantine_coding": null,
                "shipping_and_carrier_number": "ENA92271",
                "shipping_order_number": null,
                "tag": 12
            },
            "freight_informations": [
                {
                    "amount": "1700",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "OFT",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "1700",
                    "sequence_number": 9,
                    "tag": 61,
                    "unknown": "Y"
                },
                {
                    "amount": "30",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "SLF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "30",
                    "sequence_number": 8,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "10",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "PSF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "10",
                    "sequence_number": 7,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "1630",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ORC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "1630",
                    "sequence_number": 6,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "25",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ENS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "25",
                    "sequence_number": 5,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "40",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "EIR",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "40",
                    "sequence_number": 4,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "450",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "DOC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "450",
                    "sequence_number": 3,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "5",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "CAS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "5",
                    "sequence_number": 2,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "15",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "AFI",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 1,
                    "tag": 61,
                    "unknown": null
                }
            ],
            "information_for_reference": {
                "fields_not_in_manifest": {
                    "bol_place_and_date_of_issue": "190110",
                    "bol_place_of_issue": null,
                    "payable_at": null,
                    "prepaid_at": null,
                    "tag": 74
                },
                "in_words": [],
                "other_fields1": [
                    {
                        "tag": 71,
                        "up_remark_1": "D.NAME ACCOUNT: OSRAM EOOD",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "COM",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "C.PLS SEND THE SWB & D/N TO MY E-MA",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "B.ISSUE SWB",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "A.FREIGHT COLLECT",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "PAYMENT METHOD = COLLECT",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "FREIGHT: BASIC FREIGHT COLLECT",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "CHARGE_TYPE-BASIC FREIGHT; PAYER-CO",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "U@DBSCHENKER.COM SAP",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "BASIC FREIGHT COLLECT",
                        "up_remark_2": "WEBSICREATER:KITTY.ZENG@DBSCHENKER.",
                        "up_remark_3": "COMWEBSICREATER:SHERRY.LI"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "OCEAN FREIGHT COLLECT",
                        "up_remark_2": "ON CY-FO TERM",
                        "up_remark_3": "SHIPPER'S LOAD STOW COUNT AND SEAL"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "SEAWAY BILL ISSUED",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "CSO NUMBER: ENA92271",
                        "up_remark_2": null,
                        "up_remark_3": null
                    }
                ],
                "other_fields2": []
            },
            "parties_concern": {
                "consignee_fields": [
                    {
                        "consignee_1": "2227 BOZHURISTE (SOFIA) SOFIJA-G",
                        "consignee_2": null,
                        "consignee_3": null,
                        "consignee_code": null,
                        "tag": 21
                    },
                    {
                        "consignee_1": "SCHENKER EOOD",
                        "consignee_2": "AS AGENT OF SCHENKEROCEAN LTD.",
                        "consignee_3": "1A, EVROPA BLVD.",
                        "consignee_code": null,
                        "tag": 21
                    }
                ],
                "notify_party_fields": [
                    {
                        "notified_code": null,
                        "notified_data_1": "2227 BOZHURISTE (SOFIA) SOFIJA-G",
                        "notified_data_2": null,
                        "notified_data_3": null,
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    },
                    {
                        "notified_code": null,
                        "notified_data_1": "SCHENKER EOOD",
                        "notified_data_2": "AS AGENT OF SCHENKEROCEAN LTD.",
                        "notified_data_3": "1A, EVROPA BLVD.",
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    }
                ],
                "shipper_fields": [
                    {
                        "shipper_1": "LUOHU DISTRICT SHENZHEN",
                        "shipper_2": "518014 CHINA USCI91440300781395032F",
                        "shipper_3": null,
                        "shipper_code": null,
                        "tag": 16
                    },
                    {
                        "shipper_1": "SCHENKER CHINA LTD.SHENZHEN BRANCH",
                        "shipper_2": "21/F INTERNATIONAL TRADE CENTER",
                        "shipper_3": "NO.3002 RENMIN NAN ROAD",
                        "shipper_code": null,
                        "tag": 16
                    }
                ]
            },
            "port_place": {
                "bol_port_of_delivery_code": "BGVAR",
                "bol_port_of_delivery_name": "VARNA",
                "bol_port_of_discharge": "BGVAR",
                "final_destination_code": null,
                "final_destination_name": null,
                "optional_ports": [],
                "tag": 13
            }
        },
        {
            "cargo_descriptions": [
                {
                    "cargo_descriptions": [
                        {
                            "cargo_description_1": "SHOES",
                            "cargo_description_2": null,
                            "cargo_description_3": null,
                            "cargo_description_4": null,
                            "cargo_sequence_number": 1,
                            "tag": 47
                        }
                    ],
                    "cargo_fields": {
                        "cargo_code": null,
                        "cargo_measurement": "78",
                        "cargo_sequence_number": 1,
                        "cargo_weight_gross": "11410",
                        "cargo_weight_net": null,
                        "is_cargo_dangerous": false,
                        "number_of_packages": 1182,
                        "package_kind_code": "CT",
                        "package_kind_description": "CARTON",
                        "tag": 41,
                        "unknown": "000011410000"
                    },
                    "cargo_in_containers": [
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "78",
                            "container_cargo_weight_kg": "11410",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "CT",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "DFSU3505617",
                            "container_number_of_packages": 1182,
                            "container_size_and_type_iso_code": "9510",
                            "container_tare_weight_kg": "4500",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10843983",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC1141000010843983"
                        }
                    ],
                    "cargo_marks": [
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "N/M"
                                }
                            ],
                            "tag": 44
                        }
                    ],
                    "dangerous_cargo_desc": {
                        "dangerous_cargo_49_field": {},
                        "dangerous_text": {}
                    }
                }
            ],
            "first_record_of_b_1": {
                "bol_all_empty_ctn": false,
                "bol_all_empty_ctn_code": "N",
                "bol_cycfs_item": "CY-FO",
                "bol_is_transshipment_port": true,
                "bol_is_transshipment_port_code": "Y",
                "bol_number": "COSU6194133260W",
                "bol_prepaid_or_collect": "Prepaid",
                "bol_prepaid_or_collect_code": "P",
                "loading_date": "2018-12-30",
                "place_of_loading": "CNNBO",
                "place_of_receipt": "CNNBO",
                "pre_vessel_code": "NH6",
                "pre_vessel_name": "TAIPEI TRIUMPH",
                "pre_voyage_number": "008W",
                "quarantine_coding": null,
                "shipping_and_carrier_number": "WNZ05400208",
                "shipping_order_number": null,
                "tag": 12
            },
            "freight_informations": [
                {
                    "amount": "1750",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "OFT",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": "CNWEN",
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "1750",
                    "sequence_number": 13,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "1448",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "THC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": "CNWEN",
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "1448",
                    "sequence_number": 12,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "30",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "SLF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": "CNWEN",
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "30",
                    "sequence_number": 11,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "10",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "PSF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "10",
                    "sequence_number": 10,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "25",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ENS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": "CNWEN",
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "25",
                    "sequence_number": 9,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "40",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ENA",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": "CNWEN",
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "40",
                    "sequence_number": 8,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "30",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "EEC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": "CNWEN",
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "30",
                    "sequence_number": 7,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "450",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "DOC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": "CNWEN",
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "450",
                    "sequence_number": 6,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "200",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "COD",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": "CNWEN",
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "200",
                    "sequence_number": 5,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "160",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "CLS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": "CNWEN",
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "160",
                    "sequence_number": 4,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "5",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "CAS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "5",
                    "sequence_number": 3,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "15",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "AFI",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 2,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "650",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ADD",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": "CNWEN",
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "650",
                    "sequence_number": 1,
                    "tag": 61,
                    "unknown": null
                }
            ],
            "information_for_reference": {
                "fields_not_in_manifest": {
                    "bol_place_and_date_of_issue": "181230",
                    "bol_place_of_issue": null,
                    "payable_at": null,
                    "prepaid_at": null,
                    "tag": 74
                },
                "in_words": [],
                "other_fields1": [
                    {
                        "tag": 71,
                        "up_remark_1": "PREPAID",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "ON CY-FO TERM",
                        "up_remark_2": "SHIPPER'S LOAD STOW COUNT AND SEAL",
                        "up_remark_3": "OCEAN FREIGHT PREPAID"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "SEAWAY BILL ISSUED",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "CSO NUMBER: WNZ05400208V1",
                        "up_remark_2": null,
                        "up_remark_3": null
                    }
                ],
                "other_fields2": []
            },
            "parties_concern": {
                "consignee_fields": [
                    {
                        "consignee_1": "+359 89 4491449",
                        "consignee_2": null,
                        "consignee_3": null,
                        "consignee_code": null,
                        "tag": 21
                    },
                    {
                        "consignee_1": "KARIM SPED EOOD",
                        "consignee_2": "UL.SHAR PALNINA, 3, OFFICE 1",
                        "consignee_3": "VAZRAZHDANE AREA 1303, SOFIA,",
                        "consignee_code": null,
                        "tag": 21
                    }
                ],
                "notify_party_fields": [
                    {
                        "notified_code": null,
                        "notified_data_1": "+359 89 4491449",
                        "notified_data_2": null,
                        "notified_data_3": null,
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    },
                    {
                        "notified_code": null,
                        "notified_data_1": "KARIM SPED EOOD",
                        "notified_data_2": "UL.SHAR PALNINA, 3, OFFICE 1",
                        "notified_data_3": "VAZRAZHDANE AREA 1303, SOFIA,",
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    }
                ],
                "shipper_fields": [
                    {
                        "shipper_1": "RUIAN WINFUL IMPORT AND",
                        "shipper_2": "EXPORT CO.,LTD.",
                        "shipper_3": null,
                        "shipper_code": null,
                        "tag": 16
                    }
                ]
            },
            "port_place": {
                "bol_port_of_delivery_code": "BGVAR",
                "bol_port_of_delivery_name": "VARNA",
                "bol_port_of_discharge": "GRPIR",
                "final_destination_code": null,
                "final_destination_name": null,
                "optional_ports": [],
                "tag": 13
            }
        },
        {
            "cargo_descriptions": [
                {
                    "cargo_descriptions": [
                        {
                            "cargo_description_1": "105 MTS OF",
                            "cargo_description_2": "HDPE P600BL",
                            "cargo_description_3": "\" FREIGHT PREPAID \"",
                            "cargo_description_4": "* 17 DAYS FREE DEMURRAGE",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        }
                    ],
                    "cargo_fields": {
                        "cargo_code": null,
                        "cargo_measurement": "157.5",
                        "cargo_sequence_number": 1,
                        "cargo_weight_gross": "105315",
                        "cargo_weight_net": null,
                        "is_cargo_dangerous": false,
                        "number_of_packages": 4200,
                        "package_kind_code": "BG",
                        "package_kind_description": "BAG",
                        "tag": 41,
                        "unknown": "000105315000"
                    },
                    "cargo_in_containers": [
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "22.5",
                            "container_cargo_weight_kg": "15045",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CSLU2377125",
                            "container_number_of_packages": 600,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10432985",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC1504500010432985"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "22.5",
                            "container_cargo_weight_kg": "15045",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "TRHU3966770",
                            "container_number_of_packages": 600,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10433549",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC1504500010433549"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "22.5",
                            "container_cargo_weight_kg": "15045",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "TRHU1642426",
                            "container_number_of_packages": 600,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10432837",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC1504500010432837"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "22.5",
                            "container_cargo_weight_kg": "15045",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CSLU1658982",
                            "container_number_of_packages": 600,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10432872",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC1504500010432872"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "22.5",
                            "container_cargo_weight_kg": "15045",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "TEMU3999342",
                            "container_number_of_packages": 600,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10432844",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC1504500010432844"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "22.5",
                            "container_cargo_weight_kg": "15045",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "GLDU5731890",
                            "container_number_of_packages": 600,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10430421",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC1504500010430421"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "22.5",
                            "container_cargo_weight_kg": "15045",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CSLU1094218",
                            "container_number_of_packages": 600,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10432936",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC1504500010432936"
                        }
                    ],
                    "cargo_marks": [
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "N/M"
                                }
                            ],
                            "tag": 44
                        }
                    ],
                    "dangerous_cargo_desc": {
                        "dangerous_cargo_49_field": {},
                        "dangerous_text": {}
                    }
                }
            ],
            "first_record_of_b_1": {
                "bol_all_empty_ctn": false,
                "bol_all_empty_ctn_code": "N",
                "bol_cycfs_item": "CY-FO",
                "bol_is_transshipment_port": false,
                "bol_is_transshipment_port_code": "N",
                "bol_number": "COSU6193179830",
                "bol_prepaid_or_collect": "Prepaid",
                "bol_prepaid_or_collect_code": "P",
                "loading_date": "2018-12-09",
                "place_of_loading": "KRBUS",
                "place_of_receipt": "KRBUS",
                "pre_vessel_code": "CHE",
                "pre_vessel_name": "COSCO SHIPPING RHINE",
                "pre_voyage_number": "008W",
                "quarantine_coding": null,
                "shipping_and_carrier_number": "SEL09689005",
                "shipping_order_number": null,
                "tag": 12
            },
            "freight_informations": [
                {
                    "amount": "5250",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "OFT",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "7",
                    "rate_of_freight_charge": "750",
                    "sequence_number": 10,
                    "tag": 61,
                    "unknown": "Y"
                },
                {
                    "amount": "812000",
                    "currency": "KRW",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "THC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "7",
                    "rate_of_freight_charge": "116000",
                    "sequence_number": 9,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "56000",
                    "currency": "KRW",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "SLF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "7",
                    "rate_of_freight_charge": "8000",
                    "sequence_number": 8,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "70",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "PSF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "7",
                    "rate_of_freight_charge": "10",
                    "sequence_number": 7,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "25",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ENS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "25",
                    "sequence_number": 6,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "40",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ENA",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "40",
                    "sequence_number": 5,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "40000",
                    "currency": "KRW",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "DOC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "40000",
                    "sequence_number": 4,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "35",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "CAS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "7",
                    "rate_of_freight_charge": "5",
                    "sequence_number": 3,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "105",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "AFI",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "7",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 2,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "30940",
                    "currency": "KRW",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "132",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "7",
                    "rate_of_freight_charge": "4420",
                    "sequence_number": 1,
                    "tag": 61,
                    "unknown": null
                }
            ],
            "information_for_reference": {
                "fields_not_in_manifest": {
                    "bol_place_and_date_of_issue": "181209",
                    "bol_place_of_issue": null,
                    "payable_at": null,
                    "prepaid_at": null,
                    "tag": 74
                },
                "in_words": [],
                "other_fields1": [
                    {
                        "tag": 71,
                        "up_remark_1": "PREPAID",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "2706788-90",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "OCEAN FREIGHT PREPAID",
                        "up_remark_2": "ON CY-FO TERM",
                        "up_remark_3": "SHIPPER'S LOAD STOW COUNT AND SEAL"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "CSO NUMBER: SEL09689005V5",
                        "up_remark_2": null,
                        "up_remark_3": null
                    }
                ],
                "other_fields2": []
            },
            "parties_concern": {
                "consignee_fields": [
                    {
                        "consignee_1": "VAT  BG204041224,",
                        "consignee_2": "TEL: 00359 893001284",
                        "consignee_3": null,
                        "consignee_code": null,
                        "tag": 21
                    },
                    {
                        "consignee_1": "AFCO LTD",
                        "consignee_2": "149, TSARIGRADSKO SHOSE BLVD.,",
                        "consignee_3": "SOFIA, 1784, BULGARIA",
                        "consignee_code": null,
                        "tag": 21
                    }
                ],
                "notify_party_fields": [
                    {
                        "notified_code": null,
                        "notified_data_1": "VAT  BG204041224,",
                        "notified_data_2": "TEL: 00359 893001284",
                        "notified_data_3": null,
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    },
                    {
                        "notified_code": null,
                        "notified_data_1": "AFCO LTD",
                        "notified_data_2": "149, TSARIGRADSKO SHOSE BLVD.,",
                        "notified_data_3": "SOFIA, 1784, BULGARIA",
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    }
                ],
                "shipper_fields": [
                    {
                        "shipper_1": "CHEMEX LINK CORP.",
                        "shipper_2": "A-2709, MAPO TRAPALACE, 559,",
                        "shipper_3": "DOWHA-DONG, MAPO-KU, SEOUL, KOREA",
                        "shipper_code": null,
                        "tag": 16
                    }
                ]
            },
            "port_place": {
                "bol_port_of_delivery_code": "BGVAR",
                "bol_port_of_delivery_name": "VARNA, BULGARIA",
                "bol_port_of_discharge": "BGVAR",
                "final_destination_code": null,
                "final_destination_name": null,
                "optional_ports": [],
                "tag": 13
            }
        },
        {
            "cargo_descriptions": [
                {
                    "cargo_descriptions": [
                        {
                            "cargo_description_1": "CELLULOSE ETHER(MECELLOSE)",
                            "cargo_description_2": "FMC 23021 20K",
                            "cargo_description_3": "*HS CODE: 3912.39.8590",
                            "cargo_description_4": null,
                            "cargo_sequence_number": 1,
                            "tag": 47
                        }
                    ],
                    "cargo_fields": {
                        "cargo_code": null,
                        "cargo_measurement": "57.6",
                        "cargo_sequence_number": 1,
                        "cargo_weight_gross": "20454.4",
                        "cargo_weight_net": null,
                        "is_cargo_dangerous": false,
                        "number_of_packages": 960,
                        "package_kind_code": "BG",
                        "package_kind_description": "BAG",
                        "tag": 41,
                        "unknown": "000020454400"
                    },
                    "cargo_in_containers": [
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "57.6",
                            "container_cargo_weight_kg": "20454.4",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CCLU4625739",
                            "container_number_of_packages": 960,
                            "container_size_and_type_iso_code": "4310",
                            "container_tare_weight_kg": "4000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10431213",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2045440010431213"
                        }
                    ],
                    "cargo_marks": [
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "LOTTE FINE"
                                },
                                {
                                    "key": null,
                                    "value": "CHEMICAL"
                                },
                                {
                                    "key": null,
                                    "value": "CO., LTD."
                                },
                                {
                                    "key": null,
                                    "value": "MADE IN KOREA"
                                }
                            ],
                            "tag": 44
                        },
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "MECELLOSE"
                                },
                                {
                                    "key": null,
                                    "value": "CELLULOSE"
                                },
                                {
                                    "key": null,
                                    "value": "ETHER (HPMC)"
                                },
                                {
                                    "key": null,
                                    "value": "FMC23021"
                                },
                                {
                                    "key": null,
                                    "value": "LOT NO:"
                                },
                                {
                                    "key": null,
                                    "value": "NET WT: 20KG"
                                }
                            ],
                            "tag": 44
                        }
                    ],
                    "dangerous_cargo_desc": {
                        "dangerous_cargo_49_field": {},
                        "dangerous_text": {}
                    }
                }
            ],
            "first_record_of_b_1": {
                "bol_all_empty_ctn": false,
                "bol_all_empty_ctn_code": "N",
                "bol_cycfs_item": "CY-FO",
                "bol_is_transshipment_port": false,
                "bol_is_transshipment_port_code": "N",
                "bol_number": "COSU6193166070",
                "bol_prepaid_or_collect": "Prepaid",
                "bol_prepaid_or_collect_code": "P",
                "loading_date": "2018-12-09",
                "place_of_loading": "KRBUS",
                "place_of_receipt": "KRBUS",
                "pre_vessel_code": "CHE",
                "pre_vessel_name": "COSCO SHIPPING RHINE",
                "pre_voyage_number": "008W",
                "quarantine_coding": null,
                "shipping_and_carrier_number": "SEL08138004",
                "shipping_order_number": null,
                "tag": 12
            },
            "freight_informations": [
                {
                    "amount": "1200",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "OFT",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "1200",
                    "sequence_number": 9,
                    "tag": 61,
                    "unknown": "Y"
                },
                {
                    "amount": "155000",
                    "currency": "KRW",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "THC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "155000",
                    "sequence_number": 8,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "8000",
                    "currency": "KRW",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "SLF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "8000",
                    "sequence_number": 7,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "10",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "PSF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "10",
                    "sequence_number": 6,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "25",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ENS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "25",
                    "sequence_number": 5,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "40000",
                    "currency": "KRW",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "DOC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "40000",
                    "sequence_number": 4,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "5",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "CAS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "5",
                    "sequence_number": 3,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "15",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "AFI",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 2,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "8840",
                    "currency": "KRW",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "132",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "8840",
                    "sequence_number": 1,
                    "tag": 61,
                    "unknown": null
                }
            ],
            "information_for_reference": {
                "fields_not_in_manifest": {
                    "bol_place_and_date_of_issue": "181209",
                    "bol_place_of_issue": null,
                    "payable_at": null,
                    "prepaid_at": null,
                    "tag": 74
                },
                "in_words": [],
                "other_fields1": [
                    {
                        "tag": 71,
                        "up_remark_1": "PREPAID",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "2706671-3",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "OCEAN FREIGHT PREPAID",
                        "up_remark_2": "ON CY-FO TERM",
                        "up_remark_3": "SHIPPER'S LOAD STOW COUNT AND SEAL"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "CSO NUMBER: SEL08138004V11",
                        "up_remark_2": null,
                        "up_remark_3": null
                    }
                ],
                "other_fields2": []
            },
            "parties_concern": {
                "consignee_fields": [
                    {
                        "consignee_1": "TEL:00359 2 445 6161",
                        "consignee_2": "E-MAIL:INFO.SOFIA@ELTON-GROUP.COM",
                        "consignee_3": null,
                        "consignee_code": null,
                        "tag": 21
                    },
                    {
                        "consignee_1": "ELTON CORPORATION LTD.-BULGARIA",
                        "consignee_2": "35 NUMBER 78 BOGROV, 1855 SOFIA",
                        "consignee_3": "1855 BULGARIA",
                        "consignee_code": null,
                        "tag": 21
                    }
                ],
                "notify_party_fields": [
                    {
                        "notified_code": null,
                        "notified_data_1": "TEL:00359 2 445 6161",
                        "notified_data_2": "E-MAIL:INFO.SOFIA@ELTON-GROUP.COM",
                        "notified_data_3": null,
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    },
                    {
                        "notified_code": null,
                        "notified_data_1": "ELTON CORPORATION LTD.-BULGARIA",
                        "notified_data_2": "35 NUMBER 78 BOGROV, 1855 SOFIA",
                        "notified_data_3": "1855 BULGARIA",
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    }
                ],
                "shipper_fields": [
                    {
                        "shipper_1": "SEOUL, KOREA 06181",
                        "shipper_2": null,
                        "shipper_3": null,
                        "shipper_code": null,
                        "tag": 16
                    },
                    {
                        "shipper_1": "LOTTE FINE CHEMICAL CO., LTD.",
                        "shipper_2": "26F-27F GLASSTOWER BLDG.,",
                        "shipper_3": "534 TEHERAN-RO, GANGNAM-GU,",
                        "shipper_code": null,
                        "tag": 16
                    }
                ]
            },
            "port_place": {
                "bol_port_of_delivery_code": "BGVAR",
                "bol_port_of_delivery_name": "VARNA,BULGARIA",
                "bol_port_of_discharge": "BGVAR",
                "final_destination_code": null,
                "final_destination_name": null,
                "optional_ports": [],
                "tag": 13
            }
        },
        {
            "cargo_descriptions": [
                {
                    "cargo_descriptions": [
                        {
                            "cargo_description_1": "LOTTE CHEMICAL CORP.",
                            "cargo_description_2": "* FREETIME DEMURRAGE AND",
                            "cargo_description_3": "DETENTION 14DAYS AT",
                            "cargo_description_4": "DESTINATION(COMBINE).",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "CIF PORT VARNA, BULGARIA",
                            "cargo_description_2": "ACCORDING TO INCOTERMS 2010",
                            "cargo_description_3": "* L/C NO. 10/12031",
                            "cargo_description_4": "* MANUFACTURED BY",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "TYPE - PET COPOLYMER IV 0.80,",
                            "cargo_description_2": "SOUTH KOREAN ORIGIN",
                            "cargo_description_3": "QUANTITY IN MT  - 420",
                            "cargo_description_4": "TERMS OF DELIVERY:",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        }
                    ],
                    "cargo_fields": {
                        "cargo_code": null,
                        "cargo_measurement": "500",
                        "cargo_sequence_number": 1,
                        "cargo_weight_gross": "421200",
                        "cargo_weight_net": null,
                        "is_cargo_dangerous": false,
                        "number_of_packages": 400,
                        "package_kind_code": "BG",
                        "package_kind_description": "BAG",
                        "tag": 41,
                        "unknown": "000421200000"
                    },
                    "cargo_in_containers": [
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CSLU1788184",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10523375",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010523375"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "DFSU1567754",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10523311",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010523311"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CBHU4175626",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10523220",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010523220"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "TRHU3984114",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10523373",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010523373"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CSLU1717323",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10528549",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010528549"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "OOLU1171643",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10523266",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010523266"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CSLU1107315",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10430707",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010430707"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CCLU3764600",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10523209",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010523209"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CSNU1212874",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10523258",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010523258"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CSNU1009173",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10430669",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010430669"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CCLU3947406",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10523260",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010523260"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CCLU3798107",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "8829849",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC210600008829849"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "FCIU5020139",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10430700",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010430700"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CSLU2260294",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10523261",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010523261"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CSNU1341634",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10523202",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010523202"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CCLU3904750",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10523270",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010523270"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "UETU2533335",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10523316",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010523316"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CSLU1127712",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10430769",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010430769"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CSLU1712091",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10528428",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010528428"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CBHU4158803",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10430675",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010430675"
                        }
                    ],
                    "cargo_marks": [
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "N/M"
                                }
                            ],
                            "tag": 44
                        }
                    ],
                    "dangerous_cargo_desc": {
                        "dangerous_cargo_49_field": {},
                        "dangerous_text": {}
                    }
                }
            ],
            "first_record_of_b_1": {
                "bol_all_empty_ctn": false,
                "bol_all_empty_ctn_code": "N",
                "bol_cycfs_item": "CY-FO",
                "bol_is_transshipment_port": false,
                "bol_is_transshipment_port_code": "N",
                "bol_number": "COSU6193147130",
                "bol_prepaid_or_collect": "Prepaid",
                "bol_prepaid_or_collect_code": "P",
                "loading_date": "2018-12-09",
                "place_of_loading": "KRBUS",
                "place_of_receipt": "KRBUS",
                "pre_vessel_code": "S3D",
                "pre_vessel_name": "TALOS",
                "pre_voyage_number": "019W",
                "quarantine_coding": null,
                "shipping_and_carrier_number": "SEL08138004",
                "shipping_order_number": null,
                "tag": 12
            },
            "freight_informations": [
                {
                    "amount": "14500",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "OFT",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "20",
                    "rate_of_freight_charge": "725",
                    "sequence_number": 9,
                    "tag": 61,
                    "unknown": "Y"
                },
                {
                    "amount": "2320000",
                    "currency": "KRW",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "THC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "20",
                    "rate_of_freight_charge": "116000",
                    "sequence_number": 8,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "160000",
                    "currency": "KRW",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "SLF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "20",
                    "rate_of_freight_charge": "8000",
                    "sequence_number": 7,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "200",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "PSF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "20",
                    "rate_of_freight_charge": "10",
                    "sequence_number": 6,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "25",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ENS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "25",
                    "sequence_number": 5,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "40000",
                    "currency": "KRW",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "DOC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "40000",
                    "sequence_number": 4,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "100",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "CAS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "20",
                    "rate_of_freight_charge": "5",
                    "sequence_number": 3,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "300",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "AFI",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "20",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 2,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "88400",
                    "currency": "KRW",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "132",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "20",
                    "rate_of_freight_charge": "4420",
                    "sequence_number": 1,
                    "tag": 61,
                    "unknown": null
                }
            ],
            "information_for_reference": {
                "fields_not_in_manifest": {
                    "bol_place_and_date_of_issue": "181209",
                    "bol_place_of_issue": null,
                    "payable_at": null,
                    "prepaid_at": null,
                    "tag": 74
                },
                "in_words": [],
                "other_fields1": [
                    {
                        "tag": 71,
                        "up_remark_1": "PREPAID",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "6193143740: PREPAID",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "2706833-8",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "OCEAN FREIGHT PREPAID",
                        "up_remark_2": "ON CY-FO TERM",
                        "up_remark_3": "SHIPPER'S LOAD STOW COUNT AND SEAL"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "CSO NUMBER: SEL08138004V11",
                        "up_remark_2": null,
                        "up_remark_3": null
                    }
                ],
                "other_fields2": []
            },
            "parties_concern": {
                "consignee_fields": [
                    {
                        "consignee_1": "TO THE ORDER OF",
                        "consignee_2": "THYSSENKRUPP MATERIALS BULGARIA LTD",
                        "consignee_3": null,
                        "consignee_code": null,
                        "tag": 21
                    }
                ],
                "notify_party_fields": [
                    {
                        "notified_code": null,
                        "notified_data_1": "**KOREA",
                        "notified_data_2": null,
                        "notified_data_3": null,
                        "notified_party_sequence_number": 2,
                        "tag": 26
                    },
                    {
                        "notified_code": null,
                        "notified_data_1": "PH. + 359 82 827 391",
                        "notified_data_2": null,
                        "notified_data_3": null,
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    },
                    {
                        "notified_code": null,
                        "notified_data_1": "DONAU TRANZIT LTD.,",
                        "notified_data_2": "BULGARIA, 7000 RUSE,",
                        "notified_data_3": "ALEKSANDROVSKA 1 STR.,",
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    }
                ],
                "shipper_fields": [
                    {
                        "shipper_1": "GOYONG-GI DO, 410-380, SOUTH KOREA",
                        "shipper_2": null,
                        "shipper_3": null,
                        "shipper_code": null,
                        "tag": 16
                    },
                    {
                        "shipper_1": "MAX AND MIGHTY GLOBAL CORPORATION,",
                        "shipper_2": "901 WESTERN TOWER II, 867 JANG-HANG",
                        "shipper_3": "DONG, ILSAN GU, GOYANG CITY,",
                        "shipper_code": null,
                        "tag": 16
                    }
                ]
            },
            "port_place": {
                "bol_port_of_delivery_code": "BGVAR",
                "bol_port_of_delivery_name": "PORT VARNA, BULGARIA",
                "bol_port_of_discharge": "BGVAR",
                "final_destination_code": null,
                "final_destination_name": null,
                "optional_ports": [],
                "tag": 13
            }
        },
        {
            "cargo_descriptions": [
                {
                    "cargo_descriptions": [
                        {
                            "cargo_description_1": "DESTINATION(COMBINE).",
                            "cargo_description_2": null,
                            "cargo_description_3": null,
                            "cargo_description_4": null,
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "LOTTE CHEMICAL CORP.",
                            "cargo_description_2": "* FREIGHT PREPAID",
                            "cargo_description_3": "* FREETIME DEMURRAGE AND",
                            "cargo_description_4": "DETENTION 14DAYS AT",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "CIF PORT VARNA, BULGARIA",
                            "cargo_description_2": "ACCORDING TO INCOTERMS 2010",
                            "cargo_description_3": "* L/C NO. 10/12026",
                            "cargo_description_4": "* MANUFACTURED BY",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "TYPE - PET COPOLYMER IV 0.80,",
                            "cargo_description_2": "SOUTH KOREAN ORIGIN",
                            "cargo_description_3": "QUANTITY IN MT  - 420",
                            "cargo_description_4": "TERMS OF DELIVERY:",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        }
                    ],
                    "cargo_fields": {
                        "cargo_code": null,
                        "cargo_measurement": "500",
                        "cargo_sequence_number": 1,
                        "cargo_weight_gross": "421200",
                        "cargo_weight_net": null,
                        "is_cargo_dangerous": false,
                        "number_of_packages": 400,
                        "package_kind_code": "BG",
                        "package_kind_description": "BAG",
                        "tag": 41,
                        "unknown": "000421200000"
                    },
                    "cargo_in_containers": [
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "TCLU1948101",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10430162",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010430162"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CSLU1924742",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10497595",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010497595"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CAIU3667344",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10430150",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010430150"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CSNU1546486",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "8865827",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC210600008865827"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CBHU4410920",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10430236",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010430236"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CSLU1867370",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10430094",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010430094"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CBHU4439457",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "8866889",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC210600008866889"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "UETU2252235",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "8857572",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC210600008857572"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "TRHU2494684",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10499982",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010499982"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "BSIU2827588",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "8837017",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC210600008837017"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CBHU4363412",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10430187",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010430187"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CSNU1209042",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10430189",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010430189"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CSLU1840390",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10430163",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010430163"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CSNU1321406",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10430168",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010430168"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "UETU2317110",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10430270",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010430270"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "UETU2311153",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "8857641",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC210600008857641"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CBHU5678944",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10493538",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010493538"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "UETU2429444",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10430106",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010430106"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CSNU1646762",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10497596",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC2106000010497596"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "21060",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CSLU1509850",
                            "container_number_of_packages": 20,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "8857669",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC210600008857669"
                        }
                    ],
                    "cargo_marks": [
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "N/M"
                                }
                            ],
                            "tag": 44
                        }
                    ],
                    "dangerous_cargo_desc": {
                        "dangerous_cargo_49_field": {},
                        "dangerous_text": {}
                    }
                }
            ],
            "first_record_of_b_1": {
                "bol_all_empty_ctn": false,
                "bol_all_empty_ctn_code": "N",
                "bol_cycfs_item": "CY-FO",
                "bol_is_transshipment_port": false,
                "bol_is_transshipment_port_code": "N",
                "bol_number": "COSU6192950180",
                "bol_prepaid_or_collect": "Prepaid",
                "bol_prepaid_or_collect_code": "P",
                "loading_date": "2018-12-02",
                "place_of_loading": "KRBUS",
                "place_of_receipt": "KRBUS",
                "pre_vessel_code": "CCU",
                "pre_vessel_name": "COSCO DENMARK",
                "pre_voyage_number": "026W",
                "quarantine_coding": null,
                "shipping_and_carrier_number": "SEL08138004",
                "shipping_order_number": null,
                "tag": 12
            },
            "freight_informations": [
                {
                    "amount": "14500",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "OFT",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "20",
                    "rate_of_freight_charge": "725",
                    "sequence_number": 9,
                    "tag": 61,
                    "unknown": "Y"
                },
                {
                    "amount": "2320000",
                    "currency": "KRW",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "THC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "20",
                    "rate_of_freight_charge": "116000",
                    "sequence_number": 8,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "160000",
                    "currency": "KRW",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "SLF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "20",
                    "rate_of_freight_charge": "8000",
                    "sequence_number": 7,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "200",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "PSF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "20",
                    "rate_of_freight_charge": "10",
                    "sequence_number": 6,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "25",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ENS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "25",
                    "sequence_number": 5,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "40000",
                    "currency": "KRW",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "DOC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "40000",
                    "sequence_number": 4,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "100",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "CAS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "20",
                    "rate_of_freight_charge": "5",
                    "sequence_number": 3,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "300",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "AFI",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "20",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 2,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "88400",
                    "currency": "KRW",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "132",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "20",
                    "rate_of_freight_charge": "4420",
                    "sequence_number": 1,
                    "tag": 61,
                    "unknown": null
                }
            ],
            "information_for_reference": {
                "fields_not_in_manifest": {
                    "bol_place_and_date_of_issue": "181202",
                    "bol_place_of_issue": null,
                    "payable_at": null,
                    "prepaid_at": null,
                    "tag": 74
                },
                "in_words": [],
                "other_fields1": [
                    {
                        "tag": 71,
                        "up_remark_1": "PREPAID",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "OCEAN FREIGHT PREPAID",
                        "up_remark_2": "ON CY-FO TERM",
                        "up_remark_3": "SHIPPER'S LOAD STOW COUNT AND SEAL"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "CSO NUMBER: SEL08138004V11",
                        "up_remark_2": null,
                        "up_remark_3": null
                    }
                ],
                "other_fields2": []
            },
            "parties_concern": {
                "consignee_fields": [
                    {
                        "consignee_1": "TEL:+359 2 4950379",
                        "consignee_2": "FAX:+359 2 9459069",
                        "consignee_3": null,
                        "consignee_code": null,
                        "tag": 21
                    },
                    {
                        "consignee_1": "ATLAS CARGO LTD",
                        "consignee_2": "1540 SOFIA BULGARIA AIRPORT",
                        "consignee_3": "SOFIABL  3 OFFICE 5BL 3 OFFICE 5",
                        "consignee_code": null,
                        "tag": 21
                    }
                ],
                "notify_party_fields": [
                    {
                        "notified_code": null,
                        "notified_data_1": "**KOREA",
                        "notified_data_2": null,
                        "notified_data_3": null,
                        "notified_party_sequence_number": 2,
                        "tag": 26
                    },
                    {
                        "notified_code": null,
                        "notified_data_1": "TEL:+359 2 4950379",
                        "notified_data_2": "FAX:+359 2 9459069",
                        "notified_data_3": null,
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    },
                    {
                        "notified_code": null,
                        "notified_data_1": "ATLAS CARGO LTD",
                        "notified_data_2": "1540 SOFIA BULGARIA AIRPORT",
                        "notified_data_3": "SOFIABL  3 OFFICE 5BL 3 OFFICE 5",
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    }
                ],
                "shipper_fields": [
                    {
                        "shipper_1": "GOYANG CITY, GOYONG-GI DO, 410-380,",
                        "shipper_2": "SOUTH KOREA",
                        "shipper_3": null,
                        "shipper_code": null,
                        "tag": 16
                    },
                    {
                        "shipper_1": "MAX AND MIGHTY GLOBAL CORPORATION,",
                        "shipper_2": "901 WESTERN TOWER II,",
                        "shipper_3": "867 JANG-HANG  DONG, ILSAN GU,",
                        "shipper_code": null,
                        "tag": 16
                    }
                ]
            },
            "port_place": {
                "bol_port_of_delivery_code": "BGVAR",
                "bol_port_of_delivery_name": "PORT VARNA, BULGARIA",
                "bol_port_of_discharge": "BGVAR",
                "final_destination_code": null,
                "final_destination_name": null,
                "optional_ports": [],
                "tag": 13
            }
        },
        {
            "cargo_descriptions": [
                {
                    "cargo_descriptions": [
                        {
                            "cargo_description_1": "DT:28/12/2018",
                            "cargo_description_2": "NET WT: 24998.000 KGS",
                            "cargo_description_3": "GSR WT: 26948.000 KGS",
                            "cargo_description_4": "FREIGHT PREPAID",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "INVOICE NO:SC/EXP/1685",
                            "cargo_description_2": "DT:27/12/2018",
                            "cargo_description_3": "HS CODE: 69109000",
                            "cargo_description_4": "S/BILL NO.9939956",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "01 X 40' FCL CONTAINER STC",
                            "cargo_description_2": "TOTAL 1950 PIECES ONLY",
                            "cargo_description_3": "CERAMIC SANITARYWARE",
                            "cargo_description_4": "ALL OTHER DETAILS AS PER",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        }
                    ],
                    "cargo_fields": {
                        "cargo_code": null,
                        "cargo_measurement": "40",
                        "cargo_sequence_number": 1,
                        "cargo_weight_gross": "26948",
                        "cargo_weight_net": null,
                        "is_cargo_dangerous": false,
                        "number_of_packages": 1950,
                        "package_kind_code": "PC",
                        "package_kind_description": "PIECE",
                        "tag": 41,
                        "unknown": "000026948000"
                    },
                    "cargo_in_containers": [
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "40",
                            "container_cargo_weight_kg": "26948",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "PC",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "TCNU6685643",
                            "container_number_of_packages": 1950,
                            "container_size_and_type_iso_code": "4510",
                            "container_tare_weight_kg": "4000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "227970",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC26948000227970"
                        }
                    ],
                    "cargo_marks": [
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "1X40' FCL"
                                }
                            ],
                            "tag": 44
                        }
                    ],
                    "dangerous_cargo_desc": {
                        "dangerous_cargo_49_field": {},
                        "dangerous_text": {}
                    }
                }
            ],
            "first_record_of_b_1": {
                "bol_all_empty_ctn": false,
                "bol_all_empty_ctn_code": "N",
                "bol_cycfs_item": "CY-FO",
                "bol_is_transshipment_port": false,
                "bol_is_transshipment_port_code": "N",
                "bol_number": "COSU6187867840W",
                "bol_prepaid_or_collect": "Prepaid",
                "bol_prepaid_or_collect_code": "P",
                "loading_date": "2019-01-01",
                "place_of_loading": "INMUN",
                "place_of_receipt": "INMUN",
                "pre_vessel_code": "S1V",
                "pre_vessel_name": "MSC ALBANY",
                "pre_voyage_number": "009W",
                "quarantine_coding": null,
                "shipping_and_carrier_number": "123456",
                "shipping_order_number": null,
                "tag": 12
            },
            "freight_informations": [
                {
                    "amount": "862",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "OFT",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "862",
                    "sequence_number": 7,
                    "tag": 61,
                    "unknown": "Y"
                },
                {
                    "amount": "11000",
                    "currency": "INR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "THC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "11000",
                    "sequence_number": 6,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "5",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "SLF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "5",
                    "sequence_number": 5,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "188",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "FAF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "188",
                    "sequence_number": 4,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "25",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ENS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "25",
                    "sequence_number": 3,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "3000",
                    "currency": "INR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "DOC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "3000",
                    "sequence_number": 2,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "15",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "AFI",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 1,
                    "tag": 61,
                    "unknown": null
                }
            ],
            "information_for_reference": {
                "fields_not_in_manifest": {
                    "bol_place_and_date_of_issue": "190101",
                    "bol_place_of_issue": null,
                    "payable_at": null,
                    "prepaid_at": null,
                    "tag": 74
                },
                "in_words": [],
                "other_fields1": [
                    {
                        "tag": 71,
                        "up_remark_1": "PREPAID",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "PLEASE RELEASE THE SHIPMENT WITHOUT",
                        "up_remark_2": "ORIGINAL",
                        "up_remark_3": "BILL OF LADING."
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "FAX:   30-210-4290808",
                        "up_remark_2": "\"SEA WAYBILL HAD BEEN ISSUED FOR TH",
                        "up_remark_3": "IS SHIPMENT.\""
                    },
                    {
                        "tag": 71,
                        "up_remark_1": null,
                        "up_remark_2": null,
                        "up_remark_3": "PHONE: 30-210-4290810"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "18538 PIRAEUS GREECE",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "WEIGHT DECLARED BY SHIPPER",
                        "up_remark_2": "COSCO SHIPPING LINES (GREECE) S.A.",
                        "up_remark_3": "85,AKTI MIAOULI & 2,FLESSA STR"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "OCEAN FREIGHT PREPAID",
                        "up_remark_2": "ON CY-FO TERM",
                        "up_remark_3": "SHIPPER'S LOAD STOW COUNT AND SEAL"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "SEAWAY BILL ISSUED",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "CSO NUMBER: BOM13096002V1",
                        "up_remark_2": null,
                        "up_remark_3": null
                    }
                ],
                "other_fields2": []
            },
            "parties_concern": {
                "consignee_fields": [
                    {
                        "consignee_1": "TEL: + 359 2 9845732-34",
                        "consignee_2": "FAX: + 359 2 9845727 / 9845716",
                        "consignee_3": null,
                        "consignee_code": null,
                        "tag": 21
                    },
                    {
                        "consignee_1": "M&M MILITZER AND MUNCH BG CO. LTD.",
                        "consignee_2": "11, ANDREY GERMANOV STR. SOFIA 1336",
                        "consignee_3": "BULGARIA",
                        "consignee_code": null,
                        "tag": 21
                    }
                ],
                "notify_party_fields": [
                    {
                        "notified_code": null,
                        "notified_data_1": "TEL: + 359 2 9845732-34",
                        "notified_data_2": "FAX: + 359 2 9845727 / 9845716",
                        "notified_data_3": null,
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    },
                    {
                        "notified_code": null,
                        "notified_data_1": "M&M MILITZER AND MUNCH BG CO. LTD.",
                        "notified_data_2": "11, ANDREY GERMANOV STR. SOFIA 1336",
                        "notified_data_3": "BULGARIA",
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    }
                ],
                "shipper_fields": [
                    {
                        "shipper_1": "GANDHIDHAM-370201 KUTCH",
                        "shipper_2": null,
                        "shipper_3": null,
                        "shipper_code": null,
                        "tag": 16
                    },
                    {
                        "shipper_1": "WORLDWIDE LOGISTICS INDIA PVT. LTD.",
                        "shipper_2": "AUM CORNER OFFICE NO:04,1ST FLOOR,",
                        "shipper_3": "PLOT NO:336,337 & 343,WARD-12B",
                        "shipper_code": null,
                        "tag": 16
                    }
                ]
            },
            "port_place": {
                "bol_port_of_delivery_code": "BGVAR",
                "bol_port_of_delivery_name": "VARNA,BULGARIA",
                "bol_port_of_discharge": "BGVAR",
                "final_destination_code": null,
                "final_destination_name": null,
                "optional_ports": [],
                "tag": 13
            }
        },
        {
            "cargo_descriptions": [
                {
                    "cargo_descriptions": [
                        {
                            "cargo_description_1": "26300.00  KGS",
                            "cargo_description_2": "\"FREIGHT PREPAID\"",
                            "cargo_description_3": null,
                            "cargo_description_4": null,
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "DATED : 27.12.2018",
                            "cargo_description_2": "GROSS WEIGHT:",
                            "cargo_description_3": "26760.50 KGS",
                            "cargo_description_4": "NET  WEIGHT :",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "HS CODE: 39232990",
                            "cargo_description_2": "S/BILL NO.:9961750",
                            "cargo_description_3": "DT:28.12.2018",
                            "cargo_description_4": "INV NO: SSE/E-047",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "01X40 FCL CONTAINER STC",
                            "cargo_description_2": "TOTAL 920 BALES ONLY",
                            "cargo_description_3": "PP WOVEN SACKS",
                            "cargo_description_4": "DETAILS AS PER INVOICE",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        }
                    ],
                    "cargo_fields": {
                        "cargo_code": null,
                        "cargo_measurement": null,
                        "cargo_sequence_number": 1,
                        "cargo_weight_gross": "26760.5",
                        "cargo_weight_net": null,
                        "is_cargo_dangerous": false,
                        "number_of_packages": 920,
                        "package_kind_code": "BL",
                        "package_kind_description": "BALE",
                        "tag": 41,
                        "unknown": "000026760500"
                    },
                    "cargo_in_containers": [
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "0",
                            "container_cargo_weight_kg": "26760.5",
                            "container_cycfs_item": "CY-CY",
                            "container_kind_of_packages": "BL",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CCLU7933930",
                            "container_number_of_packages": 920,
                            "container_size_and_type_iso_code": "4510",
                            "container_tare_weight_kg": "4000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "179954",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC26760500179954"
                        }
                    ],
                    "cargo_marks": [
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "NO. OF PCS"
                                },
                                {
                                    "key": null,
                                    "value": "ITEM SIZE"
                                },
                                {
                                    "key": null,
                                    "value": "BALES NO.920 BA"
                                },
                                {
                                    "key": null,
                                    "value": "LES"
                                }
                            ],
                            "tag": 44
                        }
                    ],
                    "dangerous_cargo_desc": {
                        "dangerous_cargo_49_field": {},
                        "dangerous_text": {}
                    }
                }
            ],
            "first_record_of_b_1": {
                "bol_all_empty_ctn": false,
                "bol_all_empty_ctn_code": "N",
                "bol_cycfs_item": "CY-CY",
                "bol_is_transshipment_port": false,
                "bol_is_transshipment_port_code": "N",
                "bol_number": "COSU6187864020",
                "bol_prepaid_or_collect": "Prepaid",
                "bol_prepaid_or_collect_code": "P",
                "loading_date": "2019-01-02",
                "place_of_loading": "INNVA",
                "place_of_receipt": "INNVA",
                "pre_vessel_code": "S1V",
                "pre_vessel_name": "MSC ALBANY",
                "pre_voyage_number": "009W",
                "quarantine_coding": null,
                "shipping_and_carrier_number": "BOM13101006",
                "shipping_order_number": null,
                "tag": 12
            },
            "freight_informations": [
                {
                    "amount": "812",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "OFT",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "812",
                    "sequence_number": 7,
                    "tag": 61,
                    "unknown": "Y"
                },
                {
                    "amount": "12000",
                    "currency": "INR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "THC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "12000",
                    "sequence_number": 6,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "5",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "SLF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "5",
                    "sequence_number": 5,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "188",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "FAF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "188",
                    "sequence_number": 4,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "25",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ENS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "25",
                    "sequence_number": 3,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "3000",
                    "currency": "INR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "DOC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "3000",
                    "sequence_number": 2,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "15",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "AFI",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 1,
                    "tag": 61,
                    "unknown": null
                }
            ],
            "information_for_reference": {
                "fields_not_in_manifest": {
                    "bol_place_and_date_of_issue": "190102",
                    "bol_place_of_issue": null,
                    "payable_at": null,
                    "prepaid_at": null,
                    "tag": 74
                },
                "in_words": [],
                "other_fields1": [
                    {
                        "tag": 71,
                        "up_remark_1": "PREPAID",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "FAX:   30-210-4290808",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": null,
                        "up_remark_2": null,
                        "up_remark_3": "PHONE: 30-210-4290810"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "18538 PIRAEUS GREECE",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "WEIGHT DECLARED BY SHIPPER",
                        "up_remark_2": "COSCO SHIPPING LINES (GREECE) S.A.",
                        "up_remark_3": "85,AKTI MIAOULI & 2,FLESSA STR"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "OCEAN FREIGHT PREPAID",
                        "up_remark_2": "ON CY-CY TERM",
                        "up_remark_3": "SHIPPER'S LOAD STOW COUNT AND SEAL"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "CSO NUMBER: BOM13101006V1",
                        "up_remark_2": null,
                        "up_remark_3": null
                    }
                ],
                "other_fields2": []
            },
            "parties_concern": {
                "consignee_fields": [
                    {
                        "consignee_1": "KRUSHEVO NO. 11",
                        "consignee_2": null,
                        "consignee_3": null,
                        "consignee_code": null,
                        "tag": 21
                    },
                    {
                        "consignee_1": "VIKTREID-BG LTD",
                        "consignee_2": "BULGARIA",
                        "consignee_3": "CITY PLOVDIV",
                        "consignee_code": null,
                        "tag": 21
                    }
                ],
                "notify_party_fields": [
                    {
                        "notified_code": null,
                        "notified_data_1": "KRUSHEVO NO. 11",
                        "notified_data_2": null,
                        "notified_data_3": null,
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    },
                    {
                        "notified_code": null,
                        "notified_data_1": "VIKTREID-BG LTD",
                        "notified_data_2": "BULGARIA",
                        "notified_data_3": "CITY PLOVDIV",
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    }
                ],
                "shipper_fields": [
                    {
                        "shipper_1": "P K ROAD,MULUND-WEST,",
                        "shipper_2": "MUMBAI-400080,INDIA",
                        "shipper_3": null,
                        "shipper_code": null,
                        "tag": 16
                    },
                    {
                        "shipper_1": "STAR SAGE ENTITY",
                        "shipper_2": "PLOT NO.112,MINERVA INDUSTRIAL",
                        "shipper_3": "ESTATE,NR HERCULES HOIST,",
                        "shipper_code": null,
                        "tag": 16
                    }
                ]
            },
            "port_place": {
                "bol_port_of_delivery_code": "BGVAR",
                "bol_port_of_delivery_name": "VARNA,BULGARIA",
                "bol_port_of_discharge": "BGVAR",
                "final_destination_code": null,
                "final_destination_name": null,
                "optional_ports": [],
                "tag": 13
            }
        },
        {
            "cargo_descriptions": [
                {
                    "cargo_descriptions": [
                        {
                            "cargo_description_1": "\"FREIGHT COLLECT\"",
                            "cargo_description_2": null,
                            "cargo_description_3": null,
                            "cargo_description_4": null,
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "9796837 DT. 21/12/2018 &",
                            "cargo_description_2": "9796870 DT. 21/12/2018",
                            "cargo_description_3": "CONTAINER NO: FCIU9433038",
                            "cargo_description_4": "SEAL NO.: 225098",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "NAIL POLISH BRUSH - 15/115/42",
                            "cargo_description_2": "WIDE ROUND CUT BLACK LACQUERED",
                            "cargo_description_3": "HS CODE :96032900",
                            "cargo_description_4": "SHIPPINGBILL NO & DATE :",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "NAIL POLISH BRUSH - 15/117/48",
                            "cargo_description_2": "WIDE ROUND CUT BLACK LACQUERED",
                            "cargo_description_3": "HS CODE :96032900",
                            "cargo_description_4": "21 CARTONS",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "NAIL POLISH BRUSH - 13/96/42 W",
                            "cargo_description_2": "IDE ROUND CUT BLACK LACQUERED",
                            "cargo_description_3": "HS CODE :96032900",
                            "cargo_description_4": "4 CARTONS",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "NAIL POLISH BRUSH - 15/115/48",
                            "cargo_description_2": "WIDE ROUND CUT BLACK LACQUERED",
                            "cargo_description_3": "HS CODE :96032900",
                            "cargo_description_4": "9 CARTONS",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "ER PAINT WITHOUT LOGO ETCH",
                            "cargo_description_2": "BLACK",
                            "cargo_description_3": "HS CODE :39235010",
                            "cargo_description_4": "21 CARTONS",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "WIDE ROUND CUT BLACK LACQUERED",
                            "cargo_description_2": "HS CODE :96032900",
                            "cargo_description_3": "60 CARTONS",
                            "cargo_description_4": "NAIL POLISH CAP - 15/1131 FING",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "IFIED JESSICA MATT ETCH BLACK",
                            "cargo_description_2": "HS CODE :39235010",
                            "cargo_description_3": "25 CARTONS",
                            "cargo_description_4": "NAIL POLISH BRUSH - 15/117/48",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "SB NO:9802140  DATE:21/12/2018",
                            "cargo_description_2": "315 CARTONS  ONLY",
                            "cargo_description_3": "175 CARTONS",
                            "cargo_description_4": "NAIL POLISH CAP - 15/1117A MOD",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "EMPTY GLASS BOTTLES",
                            "cargo_description_2": "15 PLT 10 ML HELLO KITTY - EB2",
                            "cargo_description_3": "80 -- 294,000 PCS",
                            "cargo_description_4": "H. S. CODE NO: 70109000",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "01 X 40'FCL CONTAINER STC",
                            "cargo_description_2": "TOTAL 330PACKAGES ONLY",
                            "cargo_description_3": "15 PALLETS ONLY",
                            "cargo_description_4": "1X4'HC FCL",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        }
                    ],
                    "cargo_fields": {
                        "cargo_code": null,
                        "cargo_measurement": "40",
                        "cargo_sequence_number": 1,
                        "cargo_weight_gross": "16735.7",
                        "cargo_weight_net": null,
                        "is_cargo_dangerous": false,
                        "number_of_packages": 330,
                        "package_kind_code": "PK",
                        "package_kind_description": "PACKAGE",
                        "tag": 41,
                        "unknown": "000016735730"
                    },
                    "cargo_in_containers": [
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "40",
                            "container_cargo_weight_kg": "16735.7",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "PK",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "FCIU9433038",
                            "container_number_of_packages": 330,
                            "container_size_and_type_iso_code": "4510",
                            "container_tare_weight_kg": "4000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "225098",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC16735730225098"
                        }
                    ],
                    "cargo_marks": [
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "N&K COS./ BULGA"
                                },
                                {
                                    "key": null,
                                    "value": "RIA"
                                },
                                {
                                    "key": null,
                                    "value": "CARTONS NOS. 1"
                                },
                                {
                                    "key": null,
                                    "value": "TO 315"
                                }
                            ],
                            "tag": 44
                        }
                    ],
                    "dangerous_cargo_desc": {
                        "dangerous_cargo_49_field": {},
                        "dangerous_text": {}
                    }
                }
            ],
            "first_record_of_b_1": {
                "bol_all_empty_ctn": false,
                "bol_all_empty_ctn_code": "N",
                "bol_cycfs_item": "CY-FO",
                "bol_is_transshipment_port": false,
                "bol_is_transshipment_port_code": "N",
                "bol_number": "COSU6187859460W",
                "bol_prepaid_or_collect": "Collect",
                "bol_prepaid_or_collect_code": "C",
                "loading_date": "2019-01-02",
                "place_of_loading": "INNVA",
                "place_of_receipt": "INNVA",
                "pre_vessel_code": "S1V",
                "pre_vessel_name": "MSC ALBANY",
                "pre_voyage_number": "009W",
                "quarantine_coding": null,
                "shipping_and_carrier_number": "VRA00067003V",
                "shipping_order_number": null,
                "tag": 12
            },
            "freight_informations": [
                {
                    "amount": "662",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "OFT",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "662",
                    "sequence_number": 9,
                    "tag": 61,
                    "unknown": "Y"
                },
                {
                    "amount": "12000",
                    "currency": "INR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "THC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "12000",
                    "sequence_number": 8,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "5",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "SLF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "5",
                    "sequence_number": 7,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "10",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "PSF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "10",
                    "sequence_number": 6,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "188",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "FAF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "188",
                    "sequence_number": 5,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "25",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ENS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "25",
                    "sequence_number": 4,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "3000",
                    "currency": "INR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "DOC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "3000",
                    "sequence_number": 3,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "5",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "CAS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "5",
                    "sequence_number": 2,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "15",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "AFI",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 1,
                    "tag": 61,
                    "unknown": null
                }
            ],
            "information_for_reference": {
                "fields_not_in_manifest": {
                    "bol_place_and_date_of_issue": "190102",
                    "bol_place_of_issue": null,
                    "payable_at": null,
                    "prepaid_at": null,
                    "tag": 74
                },
                "in_words": [],
                "other_fields1": [
                    {
                        "tag": 71,
                        "up_remark_1": "COLLECT",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "PLEASE RELEASE THE SHIPMENT WITHOUT",
                        "up_remark_2": "ORIGINAL",
                        "up_remark_3": "BILL OF LADING."
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "FAX:   30-210-4290808",
                        "up_remark_2": "\"SEA WAYBILL HAD BEEN ISSUED FOR TH",
                        "up_remark_3": "IS SHIPMENT.\""
                    },
                    {
                        "tag": 71,
                        "up_remark_1": null,
                        "up_remark_2": null,
                        "up_remark_3": "PHONE: 30-210-4290810"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "18538 PIRAEUS GREECE",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "WEIGHT DECLARED BY SHIPPER",
                        "up_remark_2": "COSCO SHIPPING LINES (GREECE) S.A.",
                        "up_remark_3": "85,AKTI MIAOULI & 2,FLESSA STR"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "OCEAN FREIGHT COLLECT",
                        "up_remark_2": "ON CY-FO TERM",
                        "up_remark_3": "SHIPPER'S LOAD STOW COUNT AND SEAL"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "SEAWAY BILL ISSUED",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "CSO NUMBER: VRA00067003V5",
                        "up_remark_2": null,
                        "up_remark_3": null
                    }
                ],
                "other_fields2": []
            },
            "parties_concern": {
                "consignee_fields": [
                    {
                        "consignee_1": "BULGARIA",
                        "consignee_2": "TEL: 359 52681072 FAX: 359 52681070",
                        "consignee_3": null,
                        "consignee_code": null,
                        "tag": 21
                    },
                    {
                        "consignee_1": "GLOBELINK BULGARIA LTD-VARNA",
                        "consignee_2": "10 DEVNYA STR.,FLOOR 4 OFFICE 10",
                        "consignee_3": "VARNA 9000",
                        "consignee_code": null,
                        "tag": 21
                    }
                ],
                "notify_party_fields": [
                    {
                        "notified_code": null,
                        "notified_data_1": "BULGARIA",
                        "notified_data_2": "TEL: 359 52681072 FAX: 359 52681070",
                        "notified_data_3": null,
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    },
                    {
                        "notified_code": null,
                        "notified_data_1": "GLOBELINK BULGARIA LTD-VARNA",
                        "notified_data_2": "10 DEVNYA STR.,FLOOR 4 OFFICE 10",
                        "notified_data_3": "VARNA 9000",
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    }
                ],
                "shipper_fields": [
                    {
                        "shipper_1": "INDIA",
                        "shipper_2": null,
                        "shipper_3": null,
                        "shipper_code": null,
                        "tag": 16
                    },
                    {
                        "shipper_1": "GLOBELINK WW INDIA PVT LIMITED",
                        "shipper_2": "SATYAM CHAMBERS, 2ND FLOOR STATION",
                        "shipper_3": "MUMBAI, MAHARASHTRA",
                        "shipper_code": null,
                        "tag": 16
                    }
                ]
            },
            "port_place": {
                "bol_port_of_delivery_code": "BGVAR",
                "bol_port_of_delivery_name": "VARNA,BULGARIA",
                "bol_port_of_discharge": "BGVAR",
                "final_destination_code": null,
                "final_destination_name": null,
                "optional_ports": [],
                "tag": 13
            }
        },
        {
            "cargo_descriptions": [
                {
                    "cargo_descriptions": [
                        {
                            "cargo_description_1": "G.W = 15.450758 MT",
                            "cargo_description_2": "N.W = 14.307816 MT",
                            "cargo_description_3": null,
                            "cargo_description_4": null,
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "VESSEL",
                            "cargo_description_2": ":BFP MELODY 169E",
                            "cargo_description_3": "SHIPPED ON BOARD DATE",
                            "cargo_description_4": ":25.12.2018",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "56",
                            "cargo_description_2": "PHONE/FAX: +359 52 60 24 57",
                            "cargo_description_3": "E-MAIL: VARNA.BG@MUMNET.COM",
                            "cargo_description_4": "TRANSHIPMENT AT SINGAPORE ON",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "14 DAYS FREE TIME AT POD",
                            "cargo_description_2": "(DEMURRAGE",
                            "cargo_description_3": "+ DETENTION)",
                            "cargo_description_4": "* ) PHONE/FAX: +359 52 60 24",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "41 PALLET",
                            "cargo_description_2": "CARBONLESS PAPER",
                            "cargo_description_3": "HS CODE : 4809.20.00",
                            "cargo_description_4": "FREIGHT PREPAID",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        }
                    ],
                    "cargo_fields": {
                        "cargo_code": null,
                        "cargo_measurement": "25.039",
                        "cargo_sequence_number": 1,
                        "cargo_weight_gross": "15450.7",
                        "cargo_weight_net": null,
                        "is_cargo_dangerous": false,
                        "number_of_packages": 41,
                        "package_kind_code": "PL",
                        "package_kind_description": "PALLET",
                        "tag": 41,
                        "unknown": "000015450758"
                    },
                    "cargo_in_containers": [
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25.039",
                            "container_cargo_weight_kg": "15450.7",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "PL",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "TRHU3445220",
                            "container_number_of_packages": 41,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "ID391126",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC15450758ID391126"
                        }
                    ],
                    "cargo_marks": [
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "N/M"
                                }
                            ],
                            "tag": 44
                        }
                    ],
                    "dangerous_cargo_desc": {
                        "dangerous_cargo_49_field": {},
                        "dangerous_text": {}
                    }
                }
            ],
            "first_record_of_b_1": {
                "bol_all_empty_ctn": false,
                "bol_all_empty_ctn_code": "N",
                "bol_cycfs_item": "CY-FO",
                "bol_is_transshipment_port": false,
                "bol_is_transshipment_port_code": "N",
                "bol_number": "COSU6182393980",
                "bol_prepaid_or_collect": "Prepaid",
                "bol_prepaid_or_collect_code": "P",
                "loading_date": "2018-12-25",
                "place_of_loading": "IDJAK",
                "place_of_receipt": "IDJAK",
                "pre_vessel_code": "CSB",
                "pre_vessel_name": "COSCO SHIPPING LIBRA",
                "pre_voyage_number": "003W",
                "quarantine_coding": null,
                "shipping_and_carrier_number": "GAA18078",
                "shipping_order_number": null,
                "tag": 12
            },
            "freight_informations": [
                {
                    "amount": "1180",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "OFT",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "1180",
                    "sequence_number": 5,
                    "tag": 61,
                    "unknown": "Y"
                },
                {
                    "amount": "10",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "PSF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "10",
                    "sequence_number": 4,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "25",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ENS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "25",
                    "sequence_number": 3,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "5",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "CAS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "5",
                    "sequence_number": 2,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "15",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "AFI",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 1,
                    "tag": 61,
                    "unknown": null
                }
            ],
            "information_for_reference": {
                "fields_not_in_manifest": {
                    "bol_place_and_date_of_issue": "181225",
                    "bol_place_of_issue": null,
                    "payable_at": null,
                    "prepaid_at": null,
                    "tag": 74
                },
                "in_words": [],
                "other_fields1": [
                    {
                        "tag": 71,
                        "up_remark_1": "PAYMENT METHOD = PREPAID",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "FREIGHT: BASIC FREIGHT PREPAID",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "PHONE: 30-210-4290810",
                        "up_remark_2": "FAX:   30-210-4290808",
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "COSCO SHIPPING LINES (GREECE) S.A.",
                        "up_remark_2": "85,AKTI MIAOULI & 2,FLESSA STR",
                        "up_remark_3": "18538 PIRAEUS GREECE"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "BASIC FREIGHT PREPAID",
                        "up_remark_2": "SHIPPING AGENT AT VARNA,",
                        "up_remark_3": "BULGARIA:"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "OCEAN FREIGHT PREPAID",
                        "up_remark_2": "ON CY-FO TERM",
                        "up_remark_3": "SHIPPER'S LOAD STOW COUNT AND SEAL"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "CSO NUMBER: GAA18078",
                        "up_remark_2": null,
                        "up_remark_3": null
                    }
                ],
                "other_fields2": []
            },
            "parties_concern": {
                "consignee_fields": [
                    {
                        "consignee_1": "TEL: +359 64 898 212",
                        "consignee_2": "FAX: +359 64 801 354",
                        "consignee_3": null,
                        "consignee_code": null,
                        "tag": 21
                    },
                    {
                        "consignee_1": "EMA  LTD.",
                        "consignee_2": "160 DOIRAN STR, 5800 PLEVEN,",
                        "consignee_3": "BULGARIA",
                        "consignee_code": null,
                        "tag": 21
                    }
                ],
                "notify_party_fields": [
                    {
                        "notified_code": null,
                        "notified_data_1": "**) INDONESIA",
                        "notified_data_2": null,
                        "notified_data_3": null,
                        "notified_party_sequence_number": 2,
                        "tag": 26
                    },
                    {
                        "notified_code": null,
                        "notified_data_1": "MILITZER & MUNCH BG CO. LTD (M&M)",
                        "notified_data_2": "9000 VARNA, BULGARIA 4A , SLAVEYKOV",
                        "notified_data_3": "SQR., FLOOR 2 *)",
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    }
                ],
                "shipper_fields": [
                    {
                        "shipper_1": "INDONESIA TAX ID : 01.001.855",
                        "shipper_2": ".4-092.000",
                        "shipper_3": null,
                        "shipper_code": null,
                        "tag": 16
                    },
                    {
                        "shipper_1": "PT. PINDO DELI PULP AND PAPER MILLS",
                        "shipper_2": "SINAR MAS LAND PLAZA MENARA 2, LT 9",
                        "shipper_3": "JL. M.H. THAMRIN NO. 51, JAKARTA",
                        "shipper_code": null,
                        "tag": 16
                    }
                ]
            },
            "port_place": {
                "bol_port_of_delivery_code": "BGVAR",
                "bol_port_of_delivery_name": "VARNA, BULGARIA",
                "bol_port_of_discharge": "BGVAR",
                "final_destination_code": null,
                "final_destination_name": null,
                "optional_ports": [],
                "tag": 13
            }
        },
        {
            "cargo_descriptions": [
                {
                    "cargo_descriptions": [
                        {
                            "cargo_description_1": "SHIPPED ON BOARD DATE",
                            "cargo_description_2": ":25.12.2018",
                            "cargo_description_3": "G.W = 15.846376 MT",
                            "cargo_description_4": "N.W = 14.672948 MT",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "E-MAIL: VARNA.BG@MUMNET.COM",
                            "cargo_description_2": "TRANSHIPMENT AT SINGAPORE ON",
                            "cargo_description_3": "VESSEL",
                            "cargo_description_4": ":BFP MELODY 169E",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "14 DAYS FREE TIME AT POD",
                            "cargo_description_2": "(DEMMURAGE + DETENTION)",
                            "cargo_description_3": "*) PHONE/FAX: +359 52 60 24 56",
                            "cargo_description_4": "PHONE/FAX: +359 52 60 24 57",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "42 PALLET",
                            "cargo_description_2": "CARBONLESS PAPER",
                            "cargo_description_3": "HS CODE : 4809.20.00",
                            "cargo_description_4": "FREIGHT PREPAID",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        }
                    ],
                    "cargo_fields": {
                        "cargo_code": null,
                        "cargo_measurement": "25.436",
                        "cargo_sequence_number": 1,
                        "cargo_weight_gross": "15846.3",
                        "cargo_weight_net": null,
                        "is_cargo_dangerous": false,
                        "number_of_packages": 42,
                        "package_kind_code": "PL",
                        "package_kind_description": "PALLET",
                        "tag": 41,
                        "unknown": "000015846376"
                    },
                    "cargo_in_containers": [
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25.436",
                            "container_cargo_weight_kg": "15846.3",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "PL",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CSNU1322470",
                            "container_number_of_packages": 42,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "ID391127",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC15846376ID391127"
                        }
                    ],
                    "cargo_marks": [
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "N/M"
                                }
                            ],
                            "tag": 44
                        }
                    ],
                    "dangerous_cargo_desc": {
                        "dangerous_cargo_49_field": {},
                        "dangerous_text": {}
                    }
                }
            ],
            "first_record_of_b_1": {
                "bol_all_empty_ctn": false,
                "bol_all_empty_ctn_code": "N",
                "bol_cycfs_item": "CY-FO",
                "bol_is_transshipment_port": false,
                "bol_is_transshipment_port_code": "N",
                "bol_number": "COSU6182393970",
                "bol_prepaid_or_collect": "Prepaid",
                "bol_prepaid_or_collect_code": "P",
                "loading_date": "2018-12-25",
                "place_of_loading": "IDJAK",
                "place_of_receipt": "IDJAK",
                "pre_vessel_code": "S3D",
                "pre_vessel_name": "TALOS",
                "pre_voyage_number": "019W",
                "quarantine_coding": null,
                "shipping_and_carrier_number": "GAA18078",
                "shipping_order_number": null,
                "tag": 12
            },
            "freight_informations": [
                {
                    "amount": "1180",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "OFT",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "1180",
                    "sequence_number": 5,
                    "tag": 61,
                    "unknown": "Y"
                },
                {
                    "amount": "10",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "PSF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "10",
                    "sequence_number": 4,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "25",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ENS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "25",
                    "sequence_number": 3,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "5",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "CAS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "5",
                    "sequence_number": 2,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "15",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "AFI",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 1,
                    "tag": 61,
                    "unknown": null
                }
            ],
            "information_for_reference": {
                "fields_not_in_manifest": {
                    "bol_place_and_date_of_issue": "181225",
                    "bol_place_of_issue": null,
                    "payable_at": null,
                    "prepaid_at": null,
                    "tag": 74
                },
                "in_words": [],
                "other_fields1": [
                    {
                        "tag": 71,
                        "up_remark_1": "PAYMENT METHOD = PREPAID",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "FREIGHT: BASIC FREIGHT PREPAID",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "PHONE: 30-210-4290810",
                        "up_remark_2": "FAX:   30-210-4290808",
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "COSCO SHIPPING LINES (GREECE) S.A.",
                        "up_remark_2": "85,AKTI MIAOULI & 2,FLESSA STR",
                        "up_remark_3": "18538 PIRAEUS GREECE"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "BASIC FREIGHT PREPAID",
                        "up_remark_2": "SHIPPING AGENT AT VARNA,",
                        "up_remark_3": "BULGARIA:"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "OCEAN FREIGHT PREPAID",
                        "up_remark_2": "ON CY-FO TERM",
                        "up_remark_3": "SHIPPER'S LOAD STOW COUNT AND SEAL"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "CSO NUMBER: GAA18078",
                        "up_remark_2": null,
                        "up_remark_3": null
                    }
                ],
                "other_fields2": []
            },
            "parties_concern": {
                "consignee_fields": [
                    {
                        "consignee_1": "TEL: +359 64 898 212",
                        "consignee_2": "FAX: +359 64 801 354",
                        "consignee_3": null,
                        "consignee_code": null,
                        "tag": 21
                    },
                    {
                        "consignee_1": "EMA  LTD.",
                        "consignee_2": "160 DOIRAN STR, 5800 PLEVEN,",
                        "consignee_3": "BULGARIA",
                        "consignee_code": null,
                        "tag": 21
                    }
                ],
                "notify_party_fields": [
                    {
                        "notified_code": null,
                        "notified_data_1": "**)INDONESIA",
                        "notified_data_2": null,
                        "notified_data_3": null,
                        "notified_party_sequence_number": 2,
                        "tag": 26
                    },
                    {
                        "notified_code": null,
                        "notified_data_1": "MILITZER & MUNCH BG CO. LTD. (M&M)",
                        "notified_data_2": "9000 VARNA, BULGARIA 4A , SLAVEYKOV",
                        "notified_data_3": "SQR., FLOOR 2*)",
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    }
                ],
                "shipper_fields": [
                    {
                        "shipper_1": "INDONESIA TAX ID : 01.001.855",
                        "shipper_2": ".4-092.000",
                        "shipper_3": null,
                        "shipper_code": null,
                        "tag": 16
                    },
                    {
                        "shipper_1": "PT. PINDO DELI PULP AND PAPER MILLS",
                        "shipper_2": "SINAR MAS LAND PLAZA MENARA 2, LT 9",
                        "shipper_3": "JL. M.H. THAMRIN NO. 51, JAKARTA",
                        "shipper_code": null,
                        "tag": 16
                    }
                ]
            },
            "port_place": {
                "bol_port_of_delivery_code": "BGVAR",
                "bol_port_of_delivery_name": "VARNA,BULGARIA",
                "bol_port_of_discharge": "BGVAR",
                "final_destination_code": null,
                "final_destination_name": null,
                "optional_ports": [],
                "tag": 13
            }
        },
        {
            "cargo_descriptions": [
                {
                    "cargo_descriptions": [
                        {
                            "cargo_description_1": "N.W = 10.840000 MT",
                            "cargo_description_2": null,
                            "cargo_description_3": null,
                            "cargo_description_4": null,
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": ":BFP MELODY 169E",
                            "cargo_description_2": "SHIPPED ON BOARD DATE",
                            "cargo_description_3": ":24.12.2018",
                            "cargo_description_4": "G.W = 11.316360 MT",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "(DEMURAGE",
                            "cargo_description_2": "+ DETENTION)",
                            "cargo_description_3": "TRANSHIPMENT AT SINGAPORE ON",
                            "cargo_description_4": "VESSEL",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "**) PHONE/FAX: +359 52 60 24",
                            "cargo_description_2": "57",
                            "cargo_description_3": "E-MAIL: VARNA.BG@MUMNET.COM",
                            "cargo_description_4": "14 DAYS FREE TIME AT POD",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "HS CODE : 4816.20.10",
                            "cargo_description_2": "FREIGHT PREPAID",
                            "cargo_description_3": "*) TAX ID :",
                            "cargo_description_4": "01.001.855.4-092.000",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "22 PALLET",
                            "cargo_description_2": "CARBONLESS PAPER",
                            "cargo_description_3": "HS CODE : 4802.58.39",
                            "cargo_description_4": "HS CODE : 4809.20.00",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        }
                    ],
                    "cargo_fields": {
                        "cargo_code": null,
                        "cargo_measurement": "21.697",
                        "cargo_sequence_number": 1,
                        "cargo_weight_gross": "11316.3",
                        "cargo_weight_net": null,
                        "is_cargo_dangerous": false,
                        "number_of_packages": 22,
                        "package_kind_code": "PL",
                        "package_kind_description": "PALLET",
                        "tag": 41,
                        "unknown": "000011316360"
                    },
                    "cargo_in_containers": [
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "21.697",
                            "container_cargo_weight_kg": "11316.3",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "PL",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CSLU2031364",
                            "container_number_of_packages": 22,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "ID391128",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC11316360ID391128"
                        }
                    ],
                    "cargo_marks": [
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "N/M"
                                }
                            ],
                            "tag": 44
                        }
                    ],
                    "dangerous_cargo_desc": {
                        "dangerous_cargo_49_field": {},
                        "dangerous_text": {}
                    }
                }
            ],
            "first_record_of_b_1": {
                "bol_all_empty_ctn": false,
                "bol_all_empty_ctn_code": "N",
                "bol_cycfs_item": "CY-FO",
                "bol_is_transshipment_port": false,
                "bol_is_transshipment_port_code": "N",
                "bol_number": "COSU6182393960",
                "bol_prepaid_or_collect": "Prepaid",
                "bol_prepaid_or_collect_code": "P",
                "loading_date": "2018-12-25",
                "place_of_loading": "IDJAK",
                "place_of_receipt": "IDJAK",
                "pre_vessel_code": "S3D",
                "pre_vessel_name": "TALOS",
                "pre_voyage_number": "019W",
                "quarantine_coding": null,
                "shipping_and_carrier_number": "GAA18078",
                "shipping_order_number": null,
                "tag": 12
            },
            "freight_informations": [
                {
                    "amount": "1180",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "OFT",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "1180",
                    "sequence_number": 5,
                    "tag": 61,
                    "unknown": "Y"
                },
                {
                    "amount": "10",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "PSF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "10",
                    "sequence_number": 4,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "25",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ENS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "25",
                    "sequence_number": 3,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "5",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "CAS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "5",
                    "sequence_number": 2,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "15",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "AFI",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 1,
                    "tag": 61,
                    "unknown": null
                }
            ],
            "information_for_reference": {
                "fields_not_in_manifest": {
                    "bol_place_and_date_of_issue": "181225",
                    "bol_place_of_issue": null,
                    "payable_at": null,
                    "prepaid_at": null,
                    "tag": 74
                },
                "in_words": [],
                "other_fields1": [
                    {
                        "tag": 71,
                        "up_remark_1": "PAYMENT METHOD = PREPAID",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "FREIGHT: BASIC FREIGHT PREPAID",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "PHONE: 30-210-4290810",
                        "up_remark_2": "FAX:   30-210-4290808",
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "COSCO SHIPPING LINES (GREECE) S.A.",
                        "up_remark_2": "85,AKTI MIAOULI & 2,FLESSA STR",
                        "up_remark_3": "18538 PIRAEUS GREECE"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "BASIC FREIGHT PREPAID",
                        "up_remark_2": "SHIPPING AGENT AT VARNA,",
                        "up_remark_3": "BULGARIA:"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "OCEAN FREIGHT PREPAID",
                        "up_remark_2": "ON CY-FO TERM",
                        "up_remark_3": "SHIPPER'S LOAD STOW COUNT AND SEAL"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "CSO NUMBER: GAA18078",
                        "up_remark_2": null,
                        "up_remark_3": null
                    }
                ],
                "other_fields2": []
            },
            "parties_concern": {
                "consignee_fields": [
                    {
                        "consignee_1": "TEL: +359 64 898 212",
                        "consignee_2": "FAX: +359 64 801 354",
                        "consignee_3": null,
                        "consignee_code": null,
                        "tag": 21
                    },
                    {
                        "consignee_1": "EMA LTD.",
                        "consignee_2": "160 DOIRAN STR,",
                        "consignee_3": "5800 PLEVEN, BULGARIA",
                        "consignee_code": null,
                        "tag": 21
                    }
                ],
                "notify_party_fields": [
                    {
                        "notified_code": null,
                        "notified_data_1": "24 56 **)",
                        "notified_data_2": null,
                        "notified_data_3": null,
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    },
                    {
                        "notified_code": null,
                        "notified_data_1": "MILITZER & MUNCH BG CO. LTD (M&M)",
                        "notified_data_2": "9000 VARNA, BULGARIA 4A , SLAVEYKOV",
                        "notified_data_3": "SQR., FLOOR 2 PHONE/FAX: +359 52 60",
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    }
                ],
                "shipper_fields": [
                    {
                        "shipper_1": "JAKARTA INDONESIA *)",
                        "shipper_2": null,
                        "shipper_3": null,
                        "shipper_code": null,
                        "tag": 16
                    },
                    {
                        "shipper_1": "PT. PINDO DELI PULP AND PAPER MILLS",
                        "shipper_2": "SINAR MAS LAND PLAZA MENARA 2,",
                        "shipper_3": "LT 9 JL. M.H. THAMRIN NO. 51,",
                        "shipper_code": null,
                        "tag": 16
                    }
                ]
            },
            "port_place": {
                "bol_port_of_delivery_code": "BGVAR",
                "bol_port_of_delivery_name": "VARNA,BULGARIA",
                "bol_port_of_discharge": "BGVAR",
                "final_destination_code": null,
                "final_destination_name": null,
                "optional_ports": [],
                "tag": 13
            }
        },
        {
            "cargo_descriptions": [
                {
                    "cargo_descriptions": [
                        {
                            "cargo_description_1": ":25.12.2018",
                            "cargo_description_2": "G.W = 15.963584 MT",
                            "cargo_description_3": "N.W = 14.799512 MT",
                            "cargo_description_4": null,
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "TRANSHIPMENT AT SINGAPORE ON",
                            "cargo_description_2": "VESSEL",
                            "cargo_description_3": ":BFP MELODY 169E",
                            "cargo_description_4": "SHIPPED ON BOARD DATE",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "E-MAIL: VARNA.BG@MUMNET.COM",
                            "cargo_description_2": "14 DAYS FREE TIME AT POD",
                            "cargo_description_3": "(DEMURAGE",
                            "cargo_description_4": "+ DETENTION)",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "*) TAX ID :",
                            "cargo_description_2": "01.001.855.4-092.000",
                            "cargo_description_3": "**) PHONE/FAX: +359 52 60 24",
                            "cargo_description_4": "57",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "42 PALLET",
                            "cargo_description_2": "CARBONLESS PAPER",
                            "cargo_description_3": "HS CODE : 4809.20.00",
                            "cargo_description_4": "FREIGHT PREPAID",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        }
                    ],
                    "cargo_fields": {
                        "cargo_code": null,
                        "cargo_measurement": "25.151",
                        "cargo_sequence_number": 1,
                        "cargo_weight_gross": "15963.5",
                        "cargo_weight_net": null,
                        "is_cargo_dangerous": false,
                        "number_of_packages": 42,
                        "package_kind_code": "PL",
                        "package_kind_description": "PALLET",
                        "tag": 41,
                        "unknown": "000015963584"
                    },
                    "cargo_in_containers": [
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25.151",
                            "container_cargo_weight_kg": "15963.5",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "PL",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "DFSU1733541",
                            "container_number_of_packages": 42,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "ID391125",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC15963584ID391125"
                        }
                    ],
                    "cargo_marks": [
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "N/M"
                                }
                            ],
                            "tag": 44
                        }
                    ],
                    "dangerous_cargo_desc": {
                        "dangerous_cargo_49_field": {},
                        "dangerous_text": {}
                    }
                }
            ],
            "first_record_of_b_1": {
                "bol_all_empty_ctn": false,
                "bol_all_empty_ctn_code": "N",
                "bol_cycfs_item": "CY-FO",
                "bol_is_transshipment_port": false,
                "bol_is_transshipment_port_code": "N",
                "bol_number": "COSU6182393940",
                "bol_prepaid_or_collect": "Prepaid",
                "bol_prepaid_or_collect_code": "P",
                "loading_date": "2018-12-25",
                "place_of_loading": "IDJAK",
                "place_of_receipt": "IDJAK",
                "pre_vessel_code": "CSB",
                "pre_vessel_name": "COSCO SHIPPING LIBRA",
                "pre_voyage_number": "003W",
                "quarantine_coding": null,
                "shipping_and_carrier_number": "GAA18078",
                "shipping_order_number": null,
                "tag": 12
            },
            "freight_informations": [
                {
                    "amount": "1180",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "OFT",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "1180",
                    "sequence_number": 5,
                    "tag": 61,
                    "unknown": "Y"
                },
                {
                    "amount": "10",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "PSF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "10",
                    "sequence_number": 4,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "25",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ENS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "25",
                    "sequence_number": 3,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "5",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "CAS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "5",
                    "sequence_number": 2,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "15",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "AFI",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 1,
                    "tag": 61,
                    "unknown": null
                }
            ],
            "information_for_reference": {
                "fields_not_in_manifest": {
                    "bol_place_and_date_of_issue": "181225",
                    "bol_place_of_issue": null,
                    "payable_at": null,
                    "prepaid_at": null,
                    "tag": 74
                },
                "in_words": [],
                "other_fields1": [
                    {
                        "tag": 71,
                        "up_remark_1": "PAYMENT METHOD = PREPAID",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "FREIGHT: BASIC FREIGHT PREPAID",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "PHONE: 30-210-4290810",
                        "up_remark_2": "FAX:   30-210-4290808",
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "COSCO SHIPPING LINES (GREECE) S.A.",
                        "up_remark_2": "85,AKTI MIAOULI & 2,FLESSA STR",
                        "up_remark_3": "18538 PIRAEUS GREECE"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "BASIC FREIGHT PREPAID",
                        "up_remark_2": "SHIPPING AGENT AT VARNA,",
                        "up_remark_3": "BULGARIA:"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "OCEAN FREIGHT PREPAID",
                        "up_remark_2": "ON CY-FO TERM",
                        "up_remark_3": "SHIPPER'S LOAD STOW COUNT AND SEAL"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "CSO NUMBER: GAA18078",
                        "up_remark_2": null,
                        "up_remark_3": null
                    }
                ],
                "other_fields2": []
            },
            "parties_concern": {
                "consignee_fields": [
                    {
                        "consignee_1": "TEL: +359 64 898 212",
                        "consignee_2": "FAX: +359 64 801 354",
                        "consignee_3": null,
                        "consignee_code": null,
                        "tag": 21
                    },
                    {
                        "consignee_1": "EMA LTD.",
                        "consignee_2": "160 DOIRAN STR,",
                        "consignee_3": "5800 PLEVEN, BULGARIA",
                        "consignee_code": null,
                        "tag": 21
                    }
                ],
                "notify_party_fields": [
                    {
                        "notified_code": null,
                        "notified_data_1": "***)INDONESIA",
                        "notified_data_2": null,
                        "notified_data_3": null,
                        "notified_party_sequence_number": 2,
                        "tag": 26
                    },
                    {
                        "notified_code": null,
                        "notified_data_1": "24 56 **)",
                        "notified_data_2": null,
                        "notified_data_3": null,
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    },
                    {
                        "notified_code": null,
                        "notified_data_1": "MILITZER & MUNCH BG CO. LTD (M&M)",
                        "notified_data_2": "9000 VARNA, BULGARIA 4A , SLAVEYKOV",
                        "notified_data_3": "SQR., FLOOR 2 PHONE/FAX: +359 52 60",
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    }
                ],
                "shipper_fields": [
                    {
                        "shipper_1": "JAKARTA INDONESIA *)",
                        "shipper_2": null,
                        "shipper_3": null,
                        "shipper_code": null,
                        "tag": 16
                    },
                    {
                        "shipper_1": "PT. PINDO DELI PULP AND PAPER MILLS",
                        "shipper_2": "SINAR MAS LAND PLAZA MENARA 2,",
                        "shipper_3": "LT 9 JL. M.H. THAMRIN NO. 51,",
                        "shipper_code": null,
                        "tag": 16
                    }
                ]
            },
            "port_place": {
                "bol_port_of_delivery_code": "BGVAR",
                "bol_port_of_delivery_name": "VARNA,BULGARIA",
                "bol_port_of_discharge": "BGVAR",
                "final_destination_code": null,
                "final_destination_name": null,
                "optional_ports": [],
                "tag": 13
            }
        },
        {
            "cargo_descriptions": [
                {
                    "cargo_descriptions": [
                        {
                            "cargo_description_1": "FAX: 00359 52 679 985",
                            "cargo_description_2": null,
                            "cargo_description_3": null,
                            "cargo_description_4": null,
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "THREE STARS COMPANY, LTD",
                            "cargo_description_2": "45 ALEKSANDER DIAKOVICH STR.,",
                            "cargo_description_3": "FLOOR 4, OFFICE 29",
                            "cargo_description_4": "TEL: 00359 52 679 980",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "WEIGHT AS DECLARED BY SHIPPER.",
                            "cargo_description_2": "ALL DESTINATION CHARGES TO BE",
                            "cargo_description_3": "COLLECTED AS PER LOCAL TARIFF.",
                            "cargo_description_4": "AGENT ADDRESS AT DESTINATION:",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "TOTAL GROSS WEIGHT: 101.376 MT",
                            "cargo_description_2": "\"FREIGHT PREPAID\"",
                            "cargo_description_3": "SHIPPER'S STOW, LOAD, COUNT",
                            "cargo_description_4": "AND SEAL.",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "4X40' HC FCL STC;",
                            "cargo_description_2": "99.000 MT PP LUBAN HP3104K",
                            "cargo_description_3": "NUMBER OF BAGS : 3960 BAGS",
                            "cargo_description_4": "TOTAL NET WEIGHT:99.000 MT",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        }
                    ],
                    "cargo_fields": {
                        "cargo_code": null,
                        "cargo_measurement": "160",
                        "cargo_sequence_number": 1,
                        "cargo_weight_gross": "101376",
                        "cargo_weight_net": "99000",
                        "is_cargo_dangerous": false,
                        "number_of_packages": 3960,
                        "package_kind_code": "BG",
                        "package_kind_description": "BAG",
                        "tag": 41,
                        "unknown": "000101376000"
                    },
                    "cargo_in_containers": [
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "40",
                            "container_cargo_weight_kg": "25344",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "FSCU9309767",
                            "container_number_of_packages": 990,
                            "container_size_and_type_iso_code": "4510",
                            "container_tare_weight_kg": "4000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "9323069",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC253440009323069"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "40",
                            "container_cargo_weight_kg": "25344",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "SEGU4145320",
                            "container_number_of_packages": 990,
                            "container_size_and_type_iso_code": "4510",
                            "container_tare_weight_kg": "4000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "9323063",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC253440009323063"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "40",
                            "container_cargo_weight_kg": "25344",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "DFSU7402556",
                            "container_number_of_packages": 990,
                            "container_size_and_type_iso_code": "4510",
                            "container_tare_weight_kg": "4000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "9323064",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC253440009323064"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "40",
                            "container_cargo_weight_kg": "25344",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "BG",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CSNU6814175",
                            "container_number_of_packages": 990,
                            "container_size_and_type_iso_code": "4510",
                            "container_tare_weight_kg": "4000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "9323068",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC253440009323068"
                        }
                    ],
                    "cargo_marks": [
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "FCL/FCL"
                                }
                            ],
                            "tag": 44
                        }
                    ],
                    "dangerous_cargo_desc": {
                        "dangerous_cargo_49_field": {},
                        "dangerous_text": {}
                    }
                }
            ],
            "first_record_of_b_1": {
                "bol_all_empty_ctn": false,
                "bol_all_empty_ctn_code": "N",
                "bol_cycfs_item": "CY-FO",
                "bol_is_transshipment_port": false,
                "bol_is_transshipment_port_code": "N",
                "bol_number": "COSU6163620220",
                "bol_prepaid_or_collect": "Prepaid",
                "bol_prepaid_or_collect_code": "P",
                "loading_date": "2018-12-11",
                "place_of_loading": "AEJAL",
                "place_of_receipt": "OMSOH",
                "pre_vessel_code": "R6D",
                "pre_vessel_name": "CMA CGM BERLIOZ",
                "pre_voyage_number": "024W",
                "quarantine_coding": null,
                "shipping_and_carrier_number": "MCT00170006",
                "shipping_order_number": null,
                "tag": 12
            },
            "freight_informations": [
                {
                    "amount": "4400",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "OFT",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "4",
                    "rate_of_freight_charge": "1100",
                    "sequence_number": 8,
                    "tag": 61,
                    "unknown": "Y"
                },
                {
                    "amount": "24",
                    "currency": "OMR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "SSL",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "4",
                    "rate_of_freight_charge": "6",
                    "sequence_number": 7,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "8",
                    "currency": "OMR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "SLF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "4",
                    "rate_of_freight_charge": "2",
                    "sequence_number": 6,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "40",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "PSF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "4",
                    "rate_of_freight_charge": "10",
                    "sequence_number": 5,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "25",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ENS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "25",
                    "sequence_number": 4,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "45",
                    "currency": "OMR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "DOC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "45",
                    "sequence_number": 3,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "20",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "CAS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "4",
                    "rate_of_freight_charge": "5",
                    "sequence_number": 2,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "60",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "AFI",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "4",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 1,
                    "tag": 61,
                    "unknown": null
                }
            ],
            "information_for_reference": {
                "fields_not_in_manifest": {
                    "bol_place_and_date_of_issue": "181211",
                    "bol_place_of_issue": null,
                    "payable_at": null,
                    "prepaid_at": null,
                    "tag": 74
                },
                "in_words": [],
                "other_fields1": [
                    {
                        "tag": 71,
                        "up_remark_1": "OCEAN FREIGHT PREPAID",
                        "up_remark_2": "ON CY-FO TERM",
                        "up_remark_3": "SHIPPER'S LOAD STOW COUNT AND SEAL"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "CSO NUMBER: MCT00170006V1",
                        "up_remark_2": null,
                        "up_remark_3": null
                    }
                ],
                "other_fields2": []
            },
            "parties_concern": {
                "consignee_fields": [
                    {
                        "consignee_1": "TO ORDER OF",
                        "consignee_2": "MB BARTER & TRADING SA",
                        "consignee_3": null,
                        "consignee_code": null,
                        "tag": 21
                    }
                ],
                "notify_party_fields": [
                    {
                        "notified_code": null,
                        "notified_data_1": "BG-9000 VARNA",
                        "notified_data_2": "PHONE: +359-52-599555",
                        "notified_data_3": null,
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    },
                    {
                        "notified_code": null,
                        "notified_data_1": "SCHENKER EOOD",
                        "notified_data_2": "PERLA STR., LOGISTICS",
                        "notified_data_3": "PARK VARNA BUILDING A6",
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    }
                ],
                "shipper_fields": [
                    {
                        "shipper_1": "ORPIC POLYMER MARKETING LLC",
                        "shipper_2": "P.O BOX 3568, PC 112",
                        "shipper_3": "RUWI, MUSCAT SULTANATE OF OMAN",
                        "shipper_code": null,
                        "tag": 16
                    }
                ]
            },
            "port_place": {
                "bol_port_of_delivery_code": "BGVAR",
                "bol_port_of_delivery_name": "VARNA BULGARIA",
                "bol_port_of_discharge": "BGVAR",
                "final_destination_code": null,
                "final_destination_name": null,
                "optional_ports": [],
                "tag": 13
            }
        },
        {
            "cargo_descriptions": [
                {
                    "cargo_descriptions": [
                        {
                            "cargo_description_1": "SHOWER",
                            "cargo_description_2": "SHELVES",
                            "cargo_description_3": null,
                            "cargo_description_4": null,
                            "cargo_sequence_number": 1,
                            "tag": 47
                        }
                    ],
                    "cargo_fields": {
                        "cargo_code": null,
                        "cargo_measurement": "25",
                        "cargo_sequence_number": 1,
                        "cargo_weight_gross": "8800",
                        "cargo_weight_net": null,
                        "is_cargo_dangerous": false,
                        "number_of_packages": 313,
                        "package_kind_code": "CT",
                        "package_kind_description": "CARTON",
                        "tag": 41,
                        "unknown": "000008800000"
                    },
                    "cargo_in_containers": [
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "25",
                            "container_cargo_weight_kg": "8800",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "CT",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "CCLU3811214",
                            "container_number_of_packages": 313,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "10022150",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC0880000010022150"
                        }
                    ],
                    "cargo_marks": [
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "N/M"
                                }
                            ],
                            "tag": 44
                        }
                    ],
                    "dangerous_cargo_desc": {
                        "dangerous_cargo_49_field": {},
                        "dangerous_text": {}
                    }
                }
            ],
            "first_record_of_b_1": {
                "bol_all_empty_ctn": false,
                "bol_all_empty_ctn_code": "N",
                "bol_cycfs_item": "CY-FO",
                "bol_is_transshipment_port": false,
                "bol_is_transshipment_port_code": "N",
                "bol_number": "COSU6157627970",
                "bol_prepaid_or_collect": "Collect",
                "bol_prepaid_or_collect_code": "C",
                "loading_date": "2019-01-08",
                "place_of_loading": "CNNBO",
                "place_of_receipt": "CNNBO",
                "pre_vessel_code": "CSE",
                "pre_vessel_name": "COSCO SHIPPING SAGIT",
                "pre_voyage_number": "002W",
                "quarantine_coding": null,
                "shipping_and_carrier_number": "VRA00221001V",
                "shipping_order_number": null,
                "tag": 12
            },
            "freight_informations": [
                {
                    "amount": "1250",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "OFT",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "1250",
                    "sequence_number": 10,
                    "tag": 61,
                    "unknown": "Y"
                },
                {
                    "amount": "680",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "THC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "680",
                    "sequence_number": 9,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "30",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "SLF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "30",
                    "sequence_number": 8,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "10",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "PSF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "10",
                    "sequence_number": 7,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "94",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "FAF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "94",
                    "sequence_number": 6,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "25",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ENS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "25",
                    "sequence_number": 5,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "30",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "EEC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "30",
                    "sequence_number": 4,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "450",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "DOC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "450",
                    "sequence_number": 3,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "5",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "CAS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "5",
                    "sequence_number": 2,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "15",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "AFI",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 1,
                    "tag": 61,
                    "unknown": null
                }
            ],
            "information_for_reference": {
                "fields_not_in_manifest": {
                    "bol_place_and_date_of_issue": "190108",
                    "bol_place_of_issue": null,
                    "payable_at": null,
                    "prepaid_at": null,
                    "tag": 74
                },
                "in_words": [],
                "other_fields1": [
                    {
                        "tag": 71,
                        "up_remark_1": "COLLECT",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "ON CY-FO TERM",
                        "up_remark_2": "SHIPPER'S LOAD STOW COUNT AND SEAL",
                        "up_remark_3": "OCEAN FREIGHT COLLECT"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "CSO NUMBER: VRA00221001V3",
                        "up_remark_2": null,
                        "up_remark_3": null
                    }
                ],
                "other_fields2": []
            },
            "parties_concern": {
                "consignee_fields": [
                    {
                        "consignee_1": "TO ORDER",
                        "consignee_2": null,
                        "consignee_3": null,
                        "consignee_code": null,
                        "tag": 21
                    }
                ],
                "notify_party_fields": [
                    {
                        "notified_code": null,
                        "notified_data_1": "TAGEMAL LTD",
                        "notified_data_2": "MOB:00359 042637575",
                        "notified_data_3": null,
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    }
                ],
                "shipper_fields": [
                    {
                        "shipper_1": "YIWU BIYANG IMPORT AND EXPORT",
                        "shipper_2": "CO., LIMITED",
                        "shipper_3": null,
                        "shipper_code": null,
                        "tag": 16
                    }
                ]
            },
            "port_place": {
                "bol_port_of_delivery_code": "BGVAR",
                "bol_port_of_delivery_name": "VARNA",
                "bol_port_of_discharge": "BGVAR",
                "final_destination_code": null,
                "final_destination_name": null,
                "optional_ports": [],
                "tag": 13
            }
        },
        {
            "cargo_descriptions": [
                {
                    "cargo_descriptions": [
                        {
                            "cargo_description_1": "FCIU5010059 - 68575 - 8 PALLET",
                            "cargo_description_2": "S- GR",
                            "cargo_description_3": "WT:12310.57 KGS",
                            "cargo_description_4": "FREIGHT COLLECT",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "NET WT 25813.06 KGS",
                            "cargo_description_2": "TEMU2760862 - 68580 - 8 PALLET",
                            "cargo_description_3": "S- GR",
                            "cargo_description_4": "WT:14062.49 KGS",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "REFRACTORIES) -",
                            "cargo_description_2": "SB NO: 9774546 DT. 20.12.2018",
                            "cargo_description_3": "INV.NO: PL813069 DT.20/12/2018",
                            "cargo_description_4": "HS CODE : 69022020",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "2X20GP FCL STC TOTAL 16",
                            "cargo_description_2": "PALLETS",
                            "cargo_description_3": "HIGH ALUMINA BRICKS AND SHAPES",
                            "cargo_description_4": "(ALUMINA FUSED CAST",
                            "cargo_sequence_number": 1,
                            "tag": 47
                        }
                    ],
                    "cargo_fields": {
                        "cargo_code": null,
                        "cargo_measurement": null,
                        "cargo_sequence_number": 1,
                        "cargo_weight_gross": "26373",
                        "cargo_weight_net": null,
                        "is_cargo_dangerous": false,
                        "number_of_packages": 16,
                        "package_kind_code": "PL",
                        "package_kind_description": "PALLET",
                        "tag": 41,
                        "unknown": "000026373060"
                    },
                    "cargo_in_containers": [
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "0",
                            "container_cargo_weight_kg": "12310.5",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "PL",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "FCIU5010059",
                            "container_number_of_packages": 8,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "68575",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC1231057068575"
                        },
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "0",
                            "container_cargo_weight_kg": "14062.4",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "PL",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "TEMU2760862",
                            "container_number_of_packages": 8,
                            "container_size_and_type_iso_code": "2210",
                            "container_tare_weight_kg": "2000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "68580",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC1406249068580"
                        }
                    ],
                    "cargo_marks": [
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "4003 PLOVDIV"
                                },
                                {
                                    "key": null,
                                    "value": "BULGARIA"
                                },
                                {
                                    "key": null,
                                    "value": "PO # PV - 11005"
                                },
                                {
                                    "key": null,
                                    "value": "846"
                                },
                                {
                                    "key": null,
                                    "value": "MADE IN INDIA"
                                }
                            ],
                            "tag": 44
                        },
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "BA GLASS BULGAR"
                                },
                                {
                                    "key": null,
                                    "value": "IA"
                                },
                                {
                                    "key": null,
                                    "value": "SA"
                                },
                                {
                                    "key": null,
                                    "value": "GEORGI BENEV ST"
                                },
                                {
                                    "key": null,
                                    "value": "R."
                                },
                                {
                                    "key": null,
                                    "value": "15"
                                }
                            ],
                            "tag": 44
                        }
                    ],
                    "dangerous_cargo_desc": {
                        "dangerous_cargo_49_field": {},
                        "dangerous_text": {}
                    }
                }
            ],
            "first_record_of_b_1": {
                "bol_all_empty_ctn": false,
                "bol_all_empty_ctn_code": "N",
                "bol_cycfs_item": "CY-FO",
                "bol_is_transshipment_port": false,
                "bol_is_transshipment_port_code": "N",
                "bol_number": "COSU6155216740W",
                "bol_prepaid_or_collect": "Collect",
                "bol_prepaid_or_collect_code": "C",
                "loading_date": "2018-12-25",
                "place_of_loading": "INCOC",
                "place_of_receipt": "INCOC",
                "pre_vessel_code": "NFR",
                "pre_vessel_name": "CPO HAMBURG",
                "pre_voyage_number": "001W",
                "quarantine_coding": null,
                "shipping_and_carrier_number": "VRA00052008",
                "shipping_order_number": null,
                "tag": 12
            },
            "freight_informations": [
                {
                    "amount": "1600",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "OFT",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "2",
                    "rate_of_freight_charge": "800",
                    "sequence_number": 7,
                    "tag": 61,
                    "unknown": "Y"
                },
                {
                    "amount": "10",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "SLF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "2",
                    "rate_of_freight_charge": "5",
                    "sequence_number": 6,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "20",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "PSF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "2",
                    "rate_of_freight_charge": "10",
                    "sequence_number": 5,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "25",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ENS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "25",
                    "sequence_number": 4,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "3000",
                    "currency": "INR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "DOC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "3000",
                    "sequence_number": 3,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "10",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "CAS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "2",
                    "rate_of_freight_charge": "5",
                    "sequence_number": 2,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "30",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "AFI",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "20F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "2",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 1,
                    "tag": 61,
                    "unknown": null
                }
            ],
            "information_for_reference": {
                "fields_not_in_manifest": {
                    "bol_place_and_date_of_issue": "181225",
                    "bol_place_of_issue": null,
                    "payable_at": null,
                    "prepaid_at": null,
                    "tag": 74
                },
                "in_words": [],
                "other_fields1": [
                    {
                        "tag": 71,
                        "up_remark_1": "PREPAID",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "OCEAN FREIGHT COLLECT",
                        "up_remark_2": "ON CY-FO TERM",
                        "up_remark_3": "SHIPPER'S LOAD STOW COUNT AND SEAL"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "SEAWAY BILL ISSUED",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "CSO NUMBER: VRA00052008V2",
                        "up_remark_2": null,
                        "up_remark_3": null
                    }
                ],
                "other_fields2": []
            },
            "parties_concern": {
                "consignee_fields": [
                    {
                        "consignee_1": "PHONE:  +359 52 648693",
                        "consignee_2": "MOBILE: +359 899889847",
                        "consignee_3": null,
                        "consignee_code": null,
                        "tag": 21
                    },
                    {
                        "consignee_1": "WORLD TRANSPORT OVERSEAS BULGARIA",
                        "consignee_2": "LTD,NATIONAL CALL CENTER FOR BULGAR",
                        "consignee_3": "IA,0700 18 WTO | 0700 18 986 / 2",
                        "consignee_code": null,
                        "tag": 21
                    }
                ],
                "notify_party_fields": [
                    {
                        "notified_code": null,
                        "notified_data_1": "PHONE:  +359 52 648693",
                        "notified_data_2": "MOBILE: +359 899889847",
                        "notified_data_3": null,
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    },
                    {
                        "notified_code": null,
                        "notified_data_1": "WORLD TRANSPORT OVERSEAS BULGARIA",
                        "notified_data_2": "LTD,NATIONAL CALL CENTER FOR BULGAR",
                        "notified_data_3": "IA,0700 18 WTO | 0700 18 986 / 2",
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    }
                ],
                "shipper_fields": [
                    {
                        "shipper_1": "THOPPUMPADY , COCHIN - 682 005",
                        "shipper_2": null,
                        "shipper_3": null,
                        "shipper_code": null,
                        "tag": 16
                    },
                    {
                        "shipper_1": "TOTAL TRANSPORT SYSTEMS LIMITED",
                        "shipper_2": "18/1836-A3 ( 11-3034 - A3 )",
                        "shipper_3": "PARRY JUNCTION, PALLICHAL ROAD",
                        "shipper_code": null,
                        "tag": 16
                    }
                ]
            },
            "port_place": {
                "bol_port_of_delivery_code": "BGVAR",
                "bol_port_of_delivery_name": "VARNA,BG",
                "bol_port_of_discharge": "BGVAR",
                "final_destination_code": null,
                "final_destination_name": null,
                "optional_ports": [],
                "tag": 13
            }
        },
        {
            "cargo_descriptions": [
                {
                    "cargo_descriptions": [
                        {
                            "cargo_description_1": "USED IN-DOOR AND OUT DOOR",
                            "cargo_description_2": "AIR-CONDITIONER PARTS, NEW",
                            "cargo_description_3": "AIR-CONDITIONERS",
                            "cargo_description_4": null,
                            "cargo_sequence_number": 1,
                            "tag": 47
                        }
                    ],
                    "cargo_fields": {
                        "cargo_code": null,
                        "cargo_measurement": "50",
                        "cargo_sequence_number": 1,
                        "cargo_weight_gross": "12024",
                        "cargo_weight_net": null,
                        "is_cargo_dangerous": false,
                        "number_of_packages": 487,
                        "package_kind_code": "UT",
                        "package_kind_description": "UNIT",
                        "tag": 41,
                        "unknown": "000012024000"
                    },
                    "cargo_in_containers": [
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "50",
                            "container_cargo_weight_kg": "12024",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "UT",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "UETU5388652",
                            "container_number_of_packages": 487,
                            "container_size_and_type_iso_code": "4510",
                            "container_tare_weight_kg": "4000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "6106767",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC120240006106767"
                        }
                    ],
                    "cargo_marks": [
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "N/M"
                                }
                            ],
                            "tag": 44
                        }
                    ],
                    "dangerous_cargo_desc": {
                        "dangerous_cargo_49_field": {},
                        "dangerous_text": {}
                    }
                }
            ],
            "first_record_of_b_1": {
                "bol_all_empty_ctn": false,
                "bol_all_empty_ctn_code": "N",
                "bol_cycfs_item": "CY-FO",
                "bol_is_transshipment_port": false,
                "bol_is_transshipment_port_code": "N",
                "bol_number": "COSU6119191630W",
                "bol_prepaid_or_collect": "Prepaid",
                "bol_prepaid_or_collect_code": "P",
                "loading_date": "2018-11-30",
                "place_of_loading": "JPOSK",
                "place_of_receipt": "JPOSK",
                "pre_vessel_code": "CNF",
                "pre_vessel_name": "COSCO SHIPPING LEO",
                "pre_voyage_number": "004W",
                "quarantine_coding": null,
                "shipping_and_carrier_number": "OSA01698001",
                "shipping_order_number": null,
                "tag": 12
            },
            "freight_informations": [
                {
                    "amount": "1400",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "OFT",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "1400",
                    "sequence_number": 8,
                    "tag": 61,
                    "unknown": "Y"
                },
                {
                    "amount": "41000",
                    "currency": "JPY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "THC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "41000",
                    "sequence_number": 7,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "400",
                    "currency": "JPY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "SLF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "400",
                    "sequence_number": 6,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "10",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "PSF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "10",
                    "sequence_number": 5,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "25",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ENS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "25",
                    "sequence_number": 4,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "3000",
                    "currency": "JPY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "DOC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "3000",
                    "sequence_number": 3,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "5",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "CAS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "5",
                    "sequence_number": 2,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "15",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "AFI",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 1,
                    "tag": 61,
                    "unknown": null
                }
            ],
            "information_for_reference": {
                "fields_not_in_manifest": {
                    "bol_place_and_date_of_issue": "181130",
                    "bol_place_of_issue": null,
                    "payable_at": null,
                    "prepaid_at": null,
                    "tag": 74
                },
                "in_words": [],
                "other_fields1": [
                    {
                        "tag": 71,
                        "up_remark_1": "F",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "FREIGHT PREPAID AS ARRANGED",
                        "up_remark_2": "ON CY-FO TERM",
                        "up_remark_3": "SHIPPER'S LOAD STOW COUNT AND SEAL"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "SEAWAY BILL ISSUED",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "CSO NUMBER: OSA01698001V17",
                        "up_remark_2": null,
                        "up_remark_3": null
                    }
                ],
                "other_fields2": []
            },
            "parties_concern": {
                "consignee_fields": [
                    {
                        "consignee_1": "SOFIA,BULGARIA",
                        "consignee_2": "TEL/FAX:+359 2 8581930",
                        "consignee_3": null,
                        "consignee_code": null,
                        "tag": 21
                    },
                    {
                        "consignee_1": "WORLD TRANSPORT OVERSEAS BULGARIA",
                        "consignee_2": "LTD.",
                        "consignee_3": "OFFICE 9,FL.6,BOROVO STR.52,1680",
                        "consignee_code": null,
                        "tag": 21
                    }
                ],
                "notify_party_fields": [
                    {
                        "notified_code": null,
                        "notified_data_1": "SAME AS CONSIGNEE",
                        "notified_data_2": null,
                        "notified_data_3": null,
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    }
                ],
                "shipper_fields": [
                    {
                        "shipper_1": "TEL:06-6135-1563 FAX:06-6125-1564",
                        "shipper_2": null,
                        "shipper_3": null,
                        "shipper_code": null,
                        "tag": 16
                    },
                    {
                        "shipper_1": "FREIGHT EXPERT INC.",
                        "shipper_2": "1-4-16 BINGO MACHI CHUO-KU OSAKA",
                        "shipper_3": "541-0051 JAPAN",
                        "shipper_code": null,
                        "tag": 16
                    }
                ]
            },
            "port_place": {
                "bol_port_of_delivery_code": "BGVAR",
                "bol_port_of_delivery_name": "VARNA",
                "bol_port_of_discharge": "BGVAR",
                "final_destination_code": null,
                "final_destination_name": null,
                "optional_ports": [],
                "tag": 13
            }
        },
        {
            "cargo_descriptions": [
                {
                    "cargo_descriptions": [
                        {
                            "cargo_description_1": "COLOR SORTER CG10",
                            "cargo_description_2": "COLOR SORTER RD5-C",
                            "cargo_description_3": "COLOR SORTER CG6",
                            "cargo_description_4": null,
                            "cargo_sequence_number": 1,
                            "tag": 47
                        }
                    ],
                    "cargo_fields": {
                        "cargo_code": null,
                        "cargo_measurement": "50.74",
                        "cargo_sequence_number": 1,
                        "cargo_weight_gross": "7369",
                        "cargo_weight_net": null,
                        "is_cargo_dangerous": false,
                        "number_of_packages": 10,
                        "package_kind_code": "CS",
                        "package_kind_description": "CASE",
                        "tag": 41,
                        "unknown": "000007369000"
                    },
                    "cargo_in_containers": [
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "50.74",
                            "container_cargo_weight_kg": "7369",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "CS",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "OOLU9727359",
                            "container_number_of_packages": 10,
                            "container_size_and_type_iso_code": "4510",
                            "container_tare_weight_kg": "4000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "CH290701",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "GC07369000CH290701"
                        }
                    ],
                    "cargo_marks": [
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "CS/HEFEI MADE"
                                },
                                {
                                    "key": null,
                                    "value": "IN CHINA TO"
                                },
                                {
                                    "key": null,
                                    "value": "BULGARIA"
                                }
                            ],
                            "tag": 44
                        }
                    ],
                    "dangerous_cargo_desc": {
                        "dangerous_cargo_49_field": {},
                        "dangerous_text": {}
                    }
                }
            ],
            "first_record_of_b_1": {
                "bol_all_empty_ctn": false,
                "bol_all_empty_ctn_code": "N",
                "bol_cycfs_item": "CY-FO",
                "bol_is_transshipment_port": false,
                "bol_is_transshipment_port_code": "N",
                "bol_number": "COSU6053912870",
                "bol_prepaid_or_collect": "Prepaid",
                "bol_prepaid_or_collect_code": "P",
                "loading_date": "2018-12-30",
                "place_of_loading": "CNSHA",
                "place_of_receipt": "CNSHA",
                "pre_vessel_code": "CSB",
                "pre_vessel_name": "COSCO SHIPPING LIBRA",
                "pre_voyage_number": "003W",
                "quarantine_coding": null,
                "shipping_and_carrier_number": "SHA64904056",
                "shipping_order_number": null,
                "tag": 12
            },
            "freight_informations": [
                {
                    "amount": "1850",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "OFT",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "1850",
                    "sequence_number": 12,
                    "tag": 61,
                    "unknown": "Y"
                },
                {
                    "amount": "1034",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "THC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "1034",
                    "sequence_number": 11,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "30",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "SLF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "30",
                    "sequence_number": 10,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "15",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "PSL",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 9,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "10",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "PSF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "10",
                    "sequence_number": 8,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "280",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "MIS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "280",
                    "sequence_number": 7,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "25",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ENS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "25",
                    "sequence_number": 6,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "30",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "EIR",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "30",
                    "sequence_number": 5,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "450",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "DOC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "450",
                    "sequence_number": 4,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "160",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "CLS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "160",
                    "sequence_number": 3,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "5",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "CAS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "5",
                    "sequence_number": 2,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "15",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "AFI",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 1,
                    "tag": 61,
                    "unknown": null
                }
            ],
            "information_for_reference": {
                "fields_not_in_manifest": {
                    "bol_place_and_date_of_issue": "181230",
                    "bol_place_of_issue": null,
                    "payable_at": null,
                    "prepaid_at": null,
                    "tag": 74
                },
                "in_words": [],
                "other_fields1": [
                    {
                        "tag": 71,
                        "up_remark_1": "PREPAID",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": null,
                        "up_remark_2": "PHONE: 30-210-4290810",
                        "up_remark_3": "FAX:   30-210-4290808"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": null,
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "COSCO SHIPPING LINES (GREECE) S.A.",
                        "up_remark_2": "85,AKTI MIAOULI & 2,FLESSA STR",
                        "up_remark_3": "18538 PIRAEUS GREECE"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "ON CY-FO TERM",
                        "up_remark_2": "SHIPPER'S LOAD STOW COUNT AND SEAL",
                        "up_remark_3": "OCEAN FREIGHT PREPAID"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "CSO NUMBER: SHA64904056V1",
                        "up_remark_2": null,
                        "up_remark_3": null
                    }
                ],
                "other_fields2": []
            },
            "parties_concern": {
                "consignee_fields": [
                    {
                        "consignee_1": "BIOSA EOOD",
                        "consignee_2": "9 ARCHIMANDRIT FILARET STR. 9000",
                        "consignee_3": "VARNA",
                        "consignee_code": null,
                        "tag": 21
                    }
                ],
                "notify_party_fields": [
                    {
                        "notified_code": null,
                        "notified_data_1": "SAME AS CONSIGNEE",
                        "notified_data_2": null,
                        "notified_data_3": null,
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    }
                ],
                "shipper_fields": [
                    {
                        "shipper_1": "HIGH&NEW TECH INDUSTRY",
                        "shipper_2": "DEVELOPMENT ZONE, HEFEI, CHINA",
                        "shipper_3": null,
                        "shipper_code": null,
                        "tag": 16
                    },
                    {
                        "shipper_1": "HEFEI MEYER OPTOELECTRONIC",
                        "shipper_2": "TECHNOLOGY INC.",
                        "shipper_3": "NO. 668, WANGJIANG WEST RD.,",
                        "shipper_code": null,
                        "tag": 16
                    }
                ]
            },
            "port_place": {
                "bol_port_of_delivery_code": "BGVAR",
                "bol_port_of_delivery_name": "VARNA, BULGARIA",
                "bol_port_of_discharge": "BGVAR",
                "final_destination_code": null,
                "final_destination_name": null,
                "optional_ports": [],
                "tag": 13
            }
        },
        {
            "cargo_descriptions": [
                {
                    "cargo_descriptions": [
                        {
                            "cargo_description_1": "AW CARGO - L:8.000 METER  W:2.",
                            "cargo_description_2": "700 METER  H:1.600 METER",
                            "cargo_description_3": null,
                            "cargo_description_4": null,
                            "cargo_sequence_number": 1,
                            "tag": 47
                        },
                        {
                            "cargo_description_1": "VIBRATING SCREEN 2YKR2052",
                            "cargo_description_2": "*FAX:0086-379-62669988",
                            "cargo_description_3": null,
                            "cargo_description_4": null,
                            "cargo_sequence_number": 1,
                            "tag": 47
                        }
                    ],
                    "cargo_fields": {
                        "cargo_code": null,
                        "cargo_measurement": "30.91",
                        "cargo_sequence_number": 1,
                        "cargo_weight_gross": "8253",
                        "cargo_weight_net": null,
                        "is_cargo_dangerous": false,
                        "number_of_packages": 5,
                        "package_kind_code": "PK",
                        "package_kind_description": "PACKAGE",
                        "tag": 41,
                        "unknown": "000008253000"
                    },
                    "cargo_in_containers": [
                        {
                            "cargo_sequence_number": 1,
                            "container_cargo_volume_m3": "30.91",
                            "container_cargo_weight_kg": "8253",
                            "container_cycfs_item": "CY-FO",
                            "container_kind_of_packages": "PK",
                            "container_loading_status": "Full",
                            "container_loading_status_code": "F",
                            "container_number": "TRIU0741958",
                            "container_number_of_packages": 5,
                            "container_size_and_type_iso_code": "4364",
                            "container_tare_weight_kg": "4000",
                            "is_container_short_shipped": false,
                            "is_dangerous_container": false,
                            "is_shipper_owned_container": false,
                            "seal_number": "NONE",
                            "stowage_location": null,
                            "tag": 51,
                            "unknown": "AW08253000NONE"
                        }
                    ],
                    "cargo_marks": [
                        {
                            "cargo_sequence_number": 1,
                            "marks": [
                                {
                                    "key": null,
                                    "value": "N/M"
                                }
                            ],
                            "tag": 44
                        }
                    ],
                    "dangerous_cargo_desc": {
                        "dangerous_cargo_49_field": {},
                        "dangerous_text": {}
                    }
                }
            ],
            "first_record_of_b_1": {
                "bol_all_empty_ctn": false,
                "bol_all_empty_ctn_code": "N",
                "bol_cycfs_item": "CY-FO",
                "bol_is_transshipment_port": false,
                "bol_is_transshipment_port_code": "N",
                "bol_number": "COSU6053433590",
                "bol_prepaid_or_collect": "Prepaid",
                "bol_prepaid_or_collect_code": "P",
                "loading_date": "2018-12-29",
                "place_of_loading": "CNSHA",
                "place_of_receipt": "CNSHA",
                "pre_vessel_code": "NH6",
                "pre_vessel_name": "TAIPEI TRIUMPH",
                "pre_voyage_number": "008W",
                "quarantine_coding": null,
                "shipping_and_carrier_number": "SHA57836058",
                "shipping_order_number": null,
                "tag": 12
            },
            "freight_informations": [
                {
                    "amount": "4400",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "OFT",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "4400",
                    "sequence_number": 12,
                    "tag": 61,
                    "unknown": "Y"
                },
                {
                    "amount": "1241",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "THC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "1241",
                    "sequence_number": 11,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "30",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "SLF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "30",
                    "sequence_number": 10,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "15",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "PSL",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 9,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "10",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "PSF",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "10",
                    "sequence_number": 8,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "380",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "MIS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "380",
                    "sequence_number": 7,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "25",
                    "currency": "USD",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "ENS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "25",
                    "sequence_number": 6,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "30",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "EIR",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "30",
                    "sequence_number": 5,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "450",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "DOC",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "LS",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "450",
                    "sequence_number": 4,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "160",
                    "currency": "CNY",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "CLS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Prepaid",
                    "prepaid_or_collect_code": "P",
                    "quantity": "1",
                    "rate_of_freight_charge": "160",
                    "sequence_number": 3,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "5",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "CAS",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "5",
                    "sequence_number": 2,
                    "tag": 61,
                    "unknown": null
                },
                {
                    "amount": "15",
                    "currency": "EUR",
                    "equivalent_amount": "0",
                    "exchange_rate": "0",
                    "exchange_to_currency": null,
                    "freight_charge_code": "AFI",
                    "freight_charge_remark": null,
                    "freight_unit_of_quantity": "40F",
                    "payable_at": null,
                    "prepaid_or_collect": "Collect",
                    "prepaid_or_collect_code": "C",
                    "quantity": "1",
                    "rate_of_freight_charge": "15",
                    "sequence_number": 1,
                    "tag": 61,
                    "unknown": null
                }
            ],
            "information_for_reference": {
                "fields_not_in_manifest": {
                    "bol_place_and_date_of_issue": "181229",
                    "bol_place_of_issue": null,
                    "payable_at": null,
                    "prepaid_at": null,
                    "tag": 74
                },
                "in_words": [],
                "other_fields1": [
                    {
                        "tag": 71,
                        "up_remark_1": "PREPAID",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "NOT SHOW OCEAN FREIGHT ON THE BILL",
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": null,
                        "up_remark_2": "PHONE: 30-210-4290810",
                        "up_remark_3": "FAX:   30-210-4290808"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": null,
                        "up_remark_2": null,
                        "up_remark_3": null
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "COSCO SHIPPING LINES (GREECE) S.A.",
                        "up_remark_2": "85,AKTI MIAOULI & 2,FLESSA STR",
                        "up_remark_3": "18538 PIRAEUS GREECE"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "ON CY-FO TERM",
                        "up_remark_2": "SHIPPER'S LOAD STOW COUNT AND SEAL",
                        "up_remark_3": "OCEAN FREIGHT PREPAID"
                    },
                    {
                        "tag": 71,
                        "up_remark_1": "CSO NUMBER: SHA57836058V1",
                        "up_remark_2": null,
                        "up_remark_3": null
                    }
                ],
                "other_fields2": []
            },
            "parties_concern": {
                "consignee_fields": [
                    {
                        "consignee_1": "DEVNYA LIMESTONE",
                        "consignee_2": "9160 CHERNEVO,BULGARIA",
                        "consignee_3": "VAT NO.BG103087214",
                        "consignee_code": null,
                        "tag": 21
                    }
                ],
                "notify_party_fields": [
                    {
                        "notified_code": null,
                        "notified_data_1": "DEVNYA LIMESTONE",
                        "notified_data_2": "9160 CHERNEVO,BULGARIA",
                        "notified_data_3": "VAT NO.BG103087214",
                        "notified_party_sequence_number": 1,
                        "tag": 26
                    }
                ],
                "shipper_fields": [
                    {
                        "shipper_1": "471023 P.R.CHINA",
                        "shipper_2": "TEL:0086-379-62669958*",
                        "shipper_3": null,
                        "shipper_code": null,
                        "tag": 16
                    },
                    {
                        "shipper_1": "LUOYANG DAHUA HEAVY INDUSTRY",
                        "shipper_2": "SCIENCE&TECHNOLOGY CO.,LTD.",
                        "shipper_3": "NO.280 GUANLIN ROAD,LUOYANG,",
                        "shipper_code": null,
                        "tag": 16
                    }
                ]
            },
            "port_place": {
                "bol_port_of_delivery_code": "BGVAR",
                "bol_port_of_delivery_name": "VARNA WEST",
                "bol_port_of_discharge": "BGVAR",
                "final_destination_code": null,
                "final_destination_name": null,
                "optional_ports": [],
                "tag": 13
            }
        }
    ],
    "shipment_instruction": {
        "arrival_date": "2019-01-31",
        "call_sign": null,
        "line_mark_code": null,
        "sailing_date": "2019-02-01",
        "ship_registry_number": null,
        "tag": 11,
        "vessel_code": "BMY",
        "vessel_name": "BFP MELODY",
        "voyage_number": "069E"
    },
    "trailer": {
        "number_of_records": 880,
        "tag": 99
    }
}

export default data