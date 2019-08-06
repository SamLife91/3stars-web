const data = {
  header: {
    creator_code: "AGTORT",
    creator_port_code: null,
    description: "SHIPPING DOCUMENT",
    option_port: false,
    payer_comm_charges: "BJ",
    receiver_codes: ["COSCON"],
    receiver_port_codes: ["BGVAR"],
    send_time: "2019-06-19T21:33:00",
    send_time_tag: "L",
    sender_code: "AGTORT",
    sender_port_code: "GRPIR",
    tag: 0,
    type: "DOC",
    version: "3.1"
  },
  shipment_informations: [
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "MOTORS AND  AUTO PARTS",
              cargo_description_2: "HARMONIZED CODE: 870899",
              cargo_description_3: null,
              cargo_description_4: null,
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: null,
            cargo_sequence_number: 1,
            cargo_weight_gross: "22000",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 644,
            package_kind_code: "PK",
            package_kind_description: "PACKAGE",
            tag: 41,
            unknown: "000022000000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "22000",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "PK",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "CSLU6284041",
              container_number_of_packages: 644,
              container_size_and_type_iso_code: "4510",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "2494869",
              stowage_location: null,
              tag: 51,
              unknown: "GC220000002494869"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "CY-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COEU9008414420",
        bol_prepaid_or_collect: "Prepaid",
        bol_prepaid_or_collect_code: "P",
        loading_date: "2019-06-05",
        place_of_loading: "ITGOA",
        place_of_receipt: "ITGOA",
        pre_vessel_code: "CCU",
        pre_vessel_name: "COSCO DENMARK",
        pre_voyage_number: "028E",
        quarantine_coding: null,
        shipping_and_carrier_number: "GVA05680009",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "450",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "450",
          sequence_number: 8,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "173",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "THC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "173",
          sequence_number: 7,
          tag: 61,
          unknown: null
        },
        {
          amount: "17",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SSL",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "17",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SSD",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "23",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OWE",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "23",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "45",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "EDO",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "45",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "50",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "EBS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "50",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190605",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "PREPAID",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "OCEAN FREIGHT PREPAID",
            up_remark_2: "ON CY-FO TERM",
            up_remark_3: "SHIPPER'S LOAD STOW COUNT AND SEAL"
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: GVA05680009V2",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "BALKANTUR - EOOD",
            consignee_2: "P. STRANDJA 2/13",
            consignee_3: "39040 VARNA (EE)",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "BALKANTUR - EOOD",
            notified_data_2: "P. STRANDJA 2/13",
            notified_data_3: "39040 VARNA (EE)",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "ITALY",
            shipper_2: null,
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "BORRELLI SRL",
            shipper_2: "VIA ROSSINI 9",
            shipper_3: "21020 BUGUGGIATE (VA)",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA,BG",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "SHRINKFOILED PALLETS OF",
              cargo_description_2: "1225 KG",
              cargo_description_3: "HS CODE:3104300000",
              cargo_description_4: null,
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "POTASSIUM SULPHATE",
              cargo_description_2: "(MIN 51% K2O) AGRICULTURAL A",
              cargo_description_3: "SOLUPOTASSE IN POLYETHYLENE",
              cargo_description_4: "BAGS OF 25 KG NET ON",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: "25",
            cargo_sequence_number: 1,
            cargo_weight_gross: "24982.2",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 980,
            package_kind_code: "BG",
            package_kind_description: "BAG",
            tag: 41,
            unknown: "000024982220"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "25",
              container_cargo_weight_kg: "24982.2",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "BG",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "CCLU3688521",
              container_number_of_packages: 980,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "060352",
              stowage_location: null,
              tag: 51,
              unknown: "GC24982220060352"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "CY-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COEU9008320070",
        bol_prepaid_or_collect: "Prepaid",
        bol_prepaid_or_collect_code: "P",
        loading_date: "2019-06-10",
        place_of_loading: "BEANT",
        place_of_receipt: "BEANT",
        pre_vessel_code: "RMO",
        pre_vessel_name: "NAVIOS DORADO",
        pre_voyage_number: "052S",
        quarantine_coding: null,
        shipping_and_carrier_number: "ANR02438",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "450",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "450",
          sequence_number: 3,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SSD",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190610",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "D.VANLOOK@MANUPORT-LOGISTICS.BE",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "PAYMENT METHOD = PREPAID",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "NUMBER OF ORIGINALS:3",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "NUMBER OF COPY WITHOUT FREIGHT:5",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "HS CODE:3104300000 FREIGHT PREPAID",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "FREIGHT:BASIC FREIGHT PREPAID",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "FREE AT",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "DESTINATION",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: ":+32 (0)3 204 95 12:TE",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "SHIPPED ON BOARD",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "OCEAN FREIGHT PREPAID",
            up_remark_2: "ON CY-FO TERM",
            up_remark_3: "SHIPPER'S LOAD STOW COUNT AND SEAL"
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: ANR02438007V1",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "TEL:+359 2 829 44 10",
            consignee_2: "EMAIL:OFFICE@SEMBODJA.BG",
            consignee_3: null,
            consignee_code: null,
            tag: 21
          },
          {
            consignee_1: "TO ORDER OF SEMBODJA CO. LTD. 8",
            consignee_2: "LAYOSH KOSHUT STREET 1606 SOFIA",
            consignee_3: "BULGARIA",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "SEMBODJA CO. LTD. 8",
            notified_data_2: "LAYOSH KOSHUT STREET  1606 SOFIA",
            notified_data_3: "BULGARIA",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "TESSENDERLO GROUP NV/SA RUE DU",
            shipper_2: "TRONE 130 TROONSTRAAT   B-1050",
            shipper_3: "BRUSSELS BELGIUM",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA,",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "EMPTY",
              cargo_description_2: null,
              cargo_description_3: null,
              cargo_description_4: null,
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: null,
            cargo_sequence_number: 1,
            cargo_weight_gross: "88000",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 22,
            package_kind_code: "CN",
            package_kind_description: "CONTAINER",
            tag: 41,
            unknown: "000088000000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "4000",
              container_cycfs_item: "FI-FO",
              container_kind_of_packages: "CN",
              container_loading_status: "Empty",
              container_loading_status_code: "E",
              container_number: "CCLU4539749",
              container_number_of_packages: 1,
              container_size_and_type_iso_code: "4310",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: true,
              seal_number: "NO SEAL",
              stowage_location: null,
              tag: 51,
              unknown: "GC04000000"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "4000",
              container_cycfs_item: "FI-FO",
              container_kind_of_packages: "CN",
              container_loading_status: "Empty",
              container_loading_status_code: "E",
              container_number: "CCLU4518052",
              container_number_of_packages: 1,
              container_size_and_type_iso_code: "4310",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: true,
              seal_number: "NO SEAL",
              stowage_location: null,
              tag: 51,
              unknown: "GC04000000"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "4000",
              container_cycfs_item: "FI-FO",
              container_kind_of_packages: "CN",
              container_loading_status: "Empty",
              container_loading_status_code: "E",
              container_number: "CCLU4567165",
              container_number_of_packages: 1,
              container_size_and_type_iso_code: "4310",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: true,
              seal_number: "NO SEAL",
              stowage_location: null,
              tag: 51,
              unknown: "GC04000000"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "4000",
              container_cycfs_item: "FI-FO",
              container_kind_of_packages: "CN",
              container_loading_status: "Empty",
              container_loading_status_code: "E",
              container_number: "CCLU4241029",
              container_number_of_packages: 1,
              container_size_and_type_iso_code: "4310",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: true,
              seal_number: "NO SEAL",
              stowage_location: null,
              tag: 51,
              unknown: "GC04000000"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "4000",
              container_cycfs_item: "FI-FO",
              container_kind_of_packages: "CN",
              container_loading_status: "Empty",
              container_loading_status_code: "E",
              container_number: "CCLU4465158",
              container_number_of_packages: 1,
              container_size_and_type_iso_code: "4310",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: true,
              seal_number: "NO SEAL",
              stowage_location: null,
              tag: 51,
              unknown: "GC04000000"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "4000",
              container_cycfs_item: "FI-FO",
              container_kind_of_packages: "CN",
              container_loading_status: "Empty",
              container_loading_status_code: "E",
              container_number: "CCLU4589009",
              container_number_of_packages: 1,
              container_size_and_type_iso_code: "4310",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: true,
              seal_number: "NO SEAL",
              stowage_location: null,
              tag: 51,
              unknown: "GC04000000"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "4000",
              container_cycfs_item: "FI-FO",
              container_kind_of_packages: "CN",
              container_loading_status: "Empty",
              container_loading_status_code: "E",
              container_number: "CCLU4560509",
              container_number_of_packages: 1,
              container_size_and_type_iso_code: "4310",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: true,
              seal_number: "NO SEAL",
              stowage_location: null,
              tag: 51,
              unknown: "GC04000000"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "4000",
              container_cycfs_item: "FI-FO",
              container_kind_of_packages: "CN",
              container_loading_status: "Empty",
              container_loading_status_code: "E",
              container_number: "CCLU4578473",
              container_number_of_packages: 1,
              container_size_and_type_iso_code: "4310",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: true,
              seal_number: "NO SEAL",
              stowage_location: null,
              tag: 51,
              unknown: "GC04000000"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "4000",
              container_cycfs_item: "FI-FO",
              container_kind_of_packages: "CN",
              container_loading_status: "Empty",
              container_loading_status_code: "E",
              container_number: "CCLU4526248",
              container_number_of_packages: 1,
              container_size_and_type_iso_code: "4310",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: true,
              seal_number: "NO SEAL",
              stowage_location: null,
              tag: 51,
              unknown: "GC04000000"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "4000",
              container_cycfs_item: "FI-FO",
              container_kind_of_packages: "CN",
              container_loading_status: "Empty",
              container_loading_status_code: "E",
              container_number: "CCLU4543841",
              container_number_of_packages: 1,
              container_size_and_type_iso_code: "4310",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: true,
              seal_number: "NO SEAL",
              stowage_location: null,
              tag: 51,
              unknown: "GC04000000"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "4000",
              container_cycfs_item: "FI-FO",
              container_kind_of_packages: "CN",
              container_loading_status: "Empty",
              container_loading_status_code: "E",
              container_number: "CCLU4525299",
              container_number_of_packages: 1,
              container_size_and_type_iso_code: "4310",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: true,
              seal_number: "NO SEAL",
              stowage_location: null,
              tag: 51,
              unknown: "GC04000000"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "4000",
              container_cycfs_item: "FI-FO",
              container_kind_of_packages: "CN",
              container_loading_status: "Empty",
              container_loading_status_code: "E",
              container_number: "CCLU4511253",
              container_number_of_packages: 1,
              container_size_and_type_iso_code: "4310",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: true,
              seal_number: "NO SEAL",
              stowage_location: null,
              tag: 51,
              unknown: "GC04000000"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "4000",
              container_cycfs_item: "FI-FO",
              container_kind_of_packages: "CN",
              container_loading_status: "Empty",
              container_loading_status_code: "E",
              container_number: "CCLU4524841",
              container_number_of_packages: 1,
              container_size_and_type_iso_code: "4310",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: true,
              seal_number: "NO SEAL",
              stowage_location: null,
              tag: 51,
              unknown: "GC04000000"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "4000",
              container_cycfs_item: "FI-FO",
              container_kind_of_packages: "CN",
              container_loading_status: "Empty",
              container_loading_status_code: "E",
              container_number: "CCLU4568710",
              container_number_of_packages: 1,
              container_size_and_type_iso_code: "4310",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: true,
              seal_number: "NO SEAL",
              stowage_location: null,
              tag: 51,
              unknown: "GC04000000"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "4000",
              container_cycfs_item: "FI-FO",
              container_kind_of_packages: "CN",
              container_loading_status: "Empty",
              container_loading_status_code: "E",
              container_number: "CCLU4526232",
              container_number_of_packages: 1,
              container_size_and_type_iso_code: "4310",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: true,
              seal_number: "NO SEAL",
              stowage_location: null,
              tag: 51,
              unknown: "GC04000000"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "4000",
              container_cycfs_item: "FI-FO",
              container_kind_of_packages: "CN",
              container_loading_status: "Empty",
              container_loading_status_code: "E",
              container_number: "CCLU4526715",
              container_number_of_packages: 1,
              container_size_and_type_iso_code: "4310",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: true,
              seal_number: "NO SEAL",
              stowage_location: null,
              tag: 51,
              unknown: "GC04000000"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "4000",
              container_cycfs_item: "FI-FO",
              container_kind_of_packages: "CN",
              container_loading_status: "Empty",
              container_loading_status_code: "E",
              container_number: "CCLU4567801",
              container_number_of_packages: 1,
              container_size_and_type_iso_code: "4310",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: true,
              seal_number: "NO SEAL",
              stowage_location: null,
              tag: 51,
              unknown: "GC04000000"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "4000",
              container_cycfs_item: "FI-FO",
              container_kind_of_packages: "CN",
              container_loading_status: "Empty",
              container_loading_status_code: "E",
              container_number: "CCLU4429850",
              container_number_of_packages: 1,
              container_size_and_type_iso_code: "4310",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: true,
              seal_number: "NO SEAL",
              stowage_location: null,
              tag: 51,
              unknown: "GC04000000"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "4000",
              container_cycfs_item: "FI-FO",
              container_kind_of_packages: "CN",
              container_loading_status: "Empty",
              container_loading_status_code: "E",
              container_number: "CCLU4507016",
              container_number_of_packages: 1,
              container_size_and_type_iso_code: "4310",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: true,
              seal_number: "NO SEAL",
              stowage_location: null,
              tag: 51,
              unknown: "GC04000000"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "4000",
              container_cycfs_item: "FI-FO",
              container_kind_of_packages: "CN",
              container_loading_status: "Empty",
              container_loading_status_code: "E",
              container_number: "CCLU4468199",
              container_number_of_packages: 1,
              container_size_and_type_iso_code: "4310",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: true,
              seal_number: "NO SEAL",
              stowage_location: null,
              tag: 51,
              unknown: "GC04000000"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "4000",
              container_cycfs_item: "FI-FO",
              container_kind_of_packages: "CN",
              container_loading_status: "Empty",
              container_loading_status_code: "E",
              container_number: "CCLU4506196",
              container_number_of_packages: 1,
              container_size_and_type_iso_code: "4310",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: true,
              seal_number: "NO SEAL",
              stowage_location: null,
              tag: 51,
              unknown: "GC04000000"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "4000",
              container_cycfs_item: "FI-FO",
              container_kind_of_packages: "CN",
              container_loading_status: "Empty",
              container_loading_status_code: "E",
              container_number: "CCLU4515069",
              container_number_of_packages: 1,
              container_size_and_type_iso_code: "4310",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: true,
              seal_number: "NO SEAL",
              stowage_location: null,
              tag: 51,
              unknown: "GC04000000"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "N/M"
                }
              ],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "FI-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COEU9007236280",
        bol_prepaid_or_collect: "Free of charge",
        bol_prepaid_or_collect_code: "F",
        loading_date: "2019-06-22",
        place_of_loading: "GRPIR",
        place_of_receipt: "GRPIR",
        pre_vessel_code: null,
        pre_vessel_name: null,
        pre_voyage_number: null,
        quarantine_coding: null,
        shipping_and_carrier_number: "PIR06144001",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190622",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "ON FI-FO TERM",
            up_remark_2: "SHIPPER'S LOAD STOW COUNT AND SEAL",
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: PIR06144001V1",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [],
        notify_party_fields: [],
        shipper_fields: [
          {
            shipper_1: "18538 PIRAEUS GREECE",
            shipper_2: null,
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "COSCO SHIPPING LINES (GREECE)",
            shipper_2: "S.A.",
            shipper_3: "85, AKTIMIAOULI & 2 FLESSA STR",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "FROZEN LAMB & GOAT CASINGS",
              cargo_description_2: "HS CODE:0504000",
              cargo_description_3: "TEMPERATURE -18C SET BY",
              cargo_description_4: "SHIPPER",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: null,
            cargo_sequence_number: 1,
            cargo_weight_gross: "25350",
            cargo_weight_net: "25062",
            is_cargo_dangerous: false,
            number_of_packages: 1400,
            package_kind_code: "PC",
            package_kind_description: "PIECE",
            tag: 41,
            unknown: "000025350000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "25350",
              container_cycfs_item: "FI-DR",
              container_kind_of_packages: "PC",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "TEMU9323252",
              container_number_of_packages: 1400,
              container_size_and_type_iso_code: "4532",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "000820",
              stowage_location: null,
              tag: 51,
              unknown: "RF25350000000820"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {
              cargo_sequence_number: 1,
              class: null,
              ems_number: null,
              flash_point: null,
              is_marine_pollutant: null,
              label_1: "                ",
              label_2: "                ",
              medical_first_aid_guide: null,
              page: null,
              tag: 43,
              temperature_from: "-18",
              temperature_measure: "Celsius",
              temperature_measure_code: "C",
              temperature_to: "-18",
              un_number: null
            }
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "FI-DR",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COEU9007235610",
        bol_prepaid_or_collect: "Prepaid",
        bol_prepaid_or_collect_code: "P",
        loading_date: "2019-06-14",
        place_of_loading: "CYLIM",
        place_of_receipt: "CYLIM",
        pre_vessel_code: "HRG",
        pre_vessel_name: "HANSA NEUBURG",
        pre_voyage_number: "775E",
        quarantine_coding: null,
        shipping_and_carrier_number: "LMS00114007",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "1150",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "1150",
          sequence_number: 4,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SSL",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "50",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "EBS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "50",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "CAS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190614",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "OCEAN FREIGHT PREPAID",
            up_remark_2: "ON FI-DR TERM",
            up_remark_3: "SHIPPER'S LOAD STOW COUNT AND SEAL"
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: LMS00114007V1",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "VAT: BG 127590850",
            consignee_2: "CASINGBG@GMAIL.COM",
            consignee_3: null,
            consignee_code: null,
            tag: 21
          },
          {
            consignee_1: "CASING BULGARIA LTD",
            consignee_2: "UI. TSAR SIMEON I, 10",
            consignee_3: "9000 VARNA, BULGARIA",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "VAT: BG 127590850",
            notified_data_2: "CASINGBG@GMAIL.COM",
            notified_data_3: null,
            notified_party_sequence_number: 1,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "CASING BULGARIA LTD",
            notified_data_2: "UI. TSAR SIMEON I, 10",
            notified_data_3: "9000 VARNA, BULGARIA",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "TEL: +357 24322960FAX: +357",
            shipper_2: "24322360",
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "ADR CASING (CYPRUS) CO., LTD",
            shipper_2: "7735 KOFINOU",
            shipper_3: "LARNACA-CYPRUS",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "BULGARIA",
              cargo_description_2: null,
              cargo_description_3: null,
              cargo_description_4: null,
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "H.S. CODE:210690",
              cargo_description_2: "SHIPPER REMARKS:",
              cargo_description_3: "FURTHER ROUTING",
              cargo_description_4: "FINAL DESTINATION",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "STILL DRINK",
              cargo_description_2: "+ 13 BINS OF",
              cargo_description_3: "ASEPTIC STRAW.BANANA",
              cargo_description_4: "BASE FOR DRINK",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "ASEPTIC PEACH BASE FOR",
              cargo_description_2: "DRINK",
              cargo_description_3: "+ 2 BINS OF",
              cargo_description_4: "ASEPTIC GRAPE BASE FOR",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "STC 3 BINS OF",
              cargo_description_2: "ASEP.GRAPEFRUIT BASE",
              cargo_description_3: "FOR STILL DRINK",
              cargo_description_4: "+ 2 BINS OF",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: null,
            cargo_sequence_number: 1,
            cargo_weight_gross: "22861.4",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 20,
            package_kind_code: "BN",
            package_kind_description: "BIN",
            tag: 41,
            unknown: "000022861400"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "22861.4",
              container_cycfs_item: "LI-FO",
              container_kind_of_packages: "BN",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "TEMU0004043",
              container_number_of_packages: 20,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "2157236",
              stowage_location: null,
              tag: 51,
              unknown: "GC228614002157236"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "LI-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COEU9007122610W",
        bol_prepaid_or_collect: "Prepaid",
        bol_prepaid_or_collect_code: "P",
        loading_date: "2019-06-07",
        place_of_loading: "ILHFA",
        place_of_receipt: "ILHFA",
        pre_vessel_code: "RJX",
        pre_vessel_name: "HOBBY HUNTER",
        pre_voyage_number: "034N",
        quarantine_coding: null,
        shipping_and_carrier_number: "HFA00807014",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "200",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "200",
          sequence_number: 7,
          tag: 61,
          unknown: null
        },
        {
          amount: "250",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "THC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "250",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "17",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SSL",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "17",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SSD",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "30",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "EBS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "30",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190607",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "OF LADING.",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "SEA WAYBILL HAD BEEN ISSUED FOR THI",
            up_remark_2: "S SHIPMENT. PLS RELEASE",
            up_remark_3: "THE SHIPMENT WITHOUT ORIGINAL BILL"
          },
          {
            tag: 71,
            up_remark_1: "OCEAN FREIGHT PREPAID",
            up_remark_2: "ON LI-FO TERM",
            up_remark_3: "SHIPPER'S LOAD STOW COUNT AND SEAL"
          },
          {
            tag: 71,
            up_remark_1: "SEAWAY BILL ISSUED",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: HFA00807014V1",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "QUADRANT BEVERAGES AD.",
            consignee_2: "6 LOZEN STR.,LOZEN VILLAGE,",
            consignee_3: "SOFIA BULGARIA",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "* ATANASSOVA",
            notified_data_2: null,
            notified_data_3: null,
            notified_party_sequence_number: 2,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "TEL:359.2.9172966,9172969",
            notified_data_2: "FAX:359.2.9172970 ATTN: RADKA *",
            notified_data_3: null,
            notified_party_sequence_number: 1,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "BULGARIA TRANS LTD.",
            notified_data_2: "19,HRISANTEMA STR.",
            notified_data_3: "1612 SOFIA BULGARIA",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "GIVAT HAIM ISRAEL",
            shipper_2: "TEL:972-46368811",
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "INTERNATIONAL BEER BREWERIES LTD.",
            shipper_2: "M.P HEFER 3898300",
            shipper_3: "VAT NO.511704819",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA,BG",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "10/12% COCOA POWDER M75",
              cargo_description_2: "MACAO ALK BAG 25 KG",
              cargo_description_3: null,
              cargo_description_4: null,
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: null,
            cargo_sequence_number: 1,
            cargo_weight_gross: "25650",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 1000,
            package_kind_code: "SK",
            package_kind_description: "SACK",
            tag: 41,
            unknown: "000025650000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "25650",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "SK",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "CCLU7405173",
              container_number_of_packages: 1000,
              container_size_and_type_iso_code: "4510",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "10835436",
              stowage_location: null,
              tag: 51,
              unknown: "GC2565000010835436"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "CY-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COEU9005639770W",
        bol_prepaid_or_collect: "Collect",
        bol_prepaid_or_collect_code: "C",
        loading_date: "2019-06-10",
        place_of_loading: "ESVAL",
        place_of_receipt: "ESVAL",
        pre_vessel_code: "CCU",
        pre_vessel_name: "COSCO DENMARK",
        pre_voyage_number: "028E",
        quarantine_coding: null,
        shipping_and_carrier_number: "VDA01354032V",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "275",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "275",
          sequence_number: 7,
          tag: 61,
          unknown: null
        },
        {
          amount: "180",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "THC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "180",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SSL",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SSD",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "55",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "NPC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "55",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "50",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "EBS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "50",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190610",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "PLACE OF PAYMENT:DESTINATION,BG",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "PAYMENT METHOD = COLLECT",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "PLEASE SHOWN YOUR DESTINATION AGENT",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "ON BLS AND INVOICES.",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "FREIGHT: ORIGIN PORT CHARGES PREPAI",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "FREIGHT: DESTINATION PORT CHARGES C",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "FREIGHT: BASIC FREIGHT COLLECT",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "PHONE: 30-210-4290810",
            up_remark_2: "FAX:   30-210-4290808",
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: null,
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "85,AKTI MIAOULI & 2,FLESSA STR",
            up_remark_2: "18538 PIRAEUS GREECE",
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "DESTINATION PORT CHARGES COLLECT",
            up_remark_2: "ORIGIN PORT CHARGES PREPAID",
            up_remark_3: "COSCO SHIPPING LINES (GREECE) S.A."
          },
          {
            tag: 71,
            up_remark_1: "OCEAN FREIGHT COLLECT",
            up_remark_2: "ON CY-FO TERM",
            up_remark_3: "SHIPPER'S LOAD STOW COUNT AND SEAL"
          },
          {
            tag: 71,
            up_remark_1: "SEAWAY BILL ISSUED",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: VDA01354032V1",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "SOFIA 1729 BULGARIA",
            consignee_2: "TEL: +35952482988",
            consignee_3: null,
            consignee_code: null,
            tag: 21
          },
          {
            consignee_1: "AI CARGO BG LTD",
            consignee_2: "23 ALEXANDAR MALINOV BLVD.",
            consignee_3: "FLOOR 3 , OFFICE 6",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "* OPERATION5.VLC@NOVOCARGO.COM",
            notified_data_2: null,
            notified_data_3: null,
            notified_party_sequence_number: 2,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "SOFIA 1729 BULGARIA",
            notified_data_2: "TEL: +35952482988",
            notified_data_3: null,
            notified_party_sequence_number: 1,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "AI CARGO BG LTD",
            notified_data_2: "23 ALEXANDAR MALINOV BLVD.",
            notified_data_3: "FLOOR 3 , OFFICE 6",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "CONTACT: NOELIA TEL: 963674686",
            shipper_2: "FAX: 963674179 EMAIL:  *",
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "NOVOCARGO VALENCIA, S.L.",
            shipper_2: "C/. DOCTOR LLUCH, N  2, 6  PISO.",
            shipper_3: "46011 - VALENCIA SPAIN",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA,",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "2127 TRAYS CAT/DOG FOOD",
              cargo_description_2: "410-1250 GR",
              cargo_description_3: "HS CODE: 23091011",
              cargo_description_4: "INVOICE:90291",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "HS CODE: 23091011",
              cargo_description_2: "INVOICE: 90290",
              cargo_description_3: "PET FOOD IN TINS",
              cargo_description_4: "ORDER: DE 19-03, NR. 2",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "PET FOOD IN TINS",
              cargo_description_2: "ORDER: DE 19-03, NR. 1",
              cargo_description_3: "1861 TRAYS CAT/DOG FOOD",
              cargo_description_4: "410-1250 GR",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: null,
            cargo_sequence_number: 1,
            cargo_weight_gross: "53452",
            cargo_weight_net: "49000",
            is_cargo_dangerous: false,
            number_of_packages: 48,
            package_kind_code: "PL",
            package_kind_description: "PALLET",
            tag: 41,
            unknown: "000053452000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "28063",
              container_cycfs_item: "DR-FO",
              container_kind_of_packages: "PL",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "UETU5130082",
              container_number_of_packages: 24,
              container_size_and_type_iso_code: "4510",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "BS326262",
              stowage_location: null,
              tag: 51,
              unknown: "GC28063000BS326262"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "25389",
              container_cycfs_item: "DR-FO",
              container_kind_of_packages: "PL",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "BMOU5514576",
              container_number_of_packages: 24,
              container_size_and_type_iso_code: "4510",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "BS326273",
              stowage_location: null,
              tag: 51,
              unknown: "GC25389000BS326273"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "DR-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COEU9003553280W",
        bol_prepaid_or_collect: "Collect",
        bol_prepaid_or_collect_code: "C",
        loading_date: "2019-05-26",
        place_of_loading: "NLROT",
        place_of_receipt: "NLNIU",
        pre_vessel_code: "UEP",
        pre_vessel_name: "NAVIOS INDIGO",
        pre_voyage_number: "015S",
        quarantine_coding: null,
        shipping_and_carrier_number: "VRA00055001",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "660",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "2",
          rate_of_freight_charge: "330",
          sequence_number: 8,
          tag: 61,
          unknown: null
        },
        {
          amount: "420",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "THC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "2",
          rate_of_freight_charge: "210",
          sequence_number: 7,
          tag: 61,
          unknown: null
        },
        {
          amount: "30",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SSL",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "2",
          rate_of_freight_charge: "15",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "30",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SSD",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "2",
          rate_of_freight_charge: "15",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "660",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "IHL",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "2",
          rate_of_freight_charge: "330",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "100",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "EBS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "2",
          rate_of_freight_charge: "50",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "50",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "DOC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "50",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "30",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "2",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190526",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "OCEAN FREIGHT COLLECT",
            up_remark_2: "ON DR-FO TERM",
            up_remark_3: "SHIPPER'S LOAD STOW COUNT AND SEAL"
          },
          {
            tag: 71,
            up_remark_1: "SEAWAY BILL ISSUED",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: VRA00055001V3",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "VARNA REGION BULGARIA",
            consignee_2: "BG 103790433",
            consignee_3: null,
            consignee_code: null,
            tag: 21
          },
          {
            consignee_1: "ILTEX LTD.",
            consignee_2: "PARCEL 127 OO5",
            consignee_3: "9I44 SLANCHEVO",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "SAME AS CNEE",
            notified_data_2: null,
            notified_data_3: null,
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "NL850467251",
            shipper_2: null,
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "DE HAAN PETFOOD",
            shipper_2: "PRODUCTIEWEG 3 2421LY NIEUWKOOP",
            shipper_3: "THE NETHERLANDS",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "SET BY SHIPPER",
              cargo_description_2: null,
              cargo_description_3: null,
              cargo_description_4: null,
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "G.W:26000 KGS",
              cargo_description_2: "TEMP +5C",
              cargo_description_3: "VENT 25",
              cargo_description_4: "HUM 65%",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "FRESH ONION",
              cargo_description_2: "BAGS : 1000",
              cargo_description_3: "BAG WEIGHT : 25KG",
              cargo_description_4: "N.W:25000 KGS",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: null,
            cargo_sequence_number: 1,
            cargo_weight_gross: "26000",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 1000,
            package_kind_code: "BG",
            package_kind_description: "BAG",
            tag: 41,
            unknown: "000026000000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "26000",
              container_cycfs_item: "FI-FO",
              container_kind_of_packages: "BG",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "SEGU9424251",
              container_number_of_packages: 1000,
              container_size_and_type_iso_code: "4532",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "10809149",
              stowage_location: null,
              tag: 51,
              unknown: "RF2600000010809149"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {
              cargo_sequence_number: 1,
              class: null,
              ems_number: null,
              flash_point: null,
              is_marine_pollutant: null,
              label_1: "                ",
              label_2: "                ",
              medical_first_aid_guide: null,
              page: null,
              tag: 43,
              temperature_from: "5",
              temperature_measure: "Celsius",
              temperature_measure_code: "C",
              temperature_to: "5",
              un_number: null
            }
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "FI-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COEU9003285300",
        bol_prepaid_or_collect: "Prepaid",
        bol_prepaid_or_collect_code: "P",
        loading_date: "2019-06-07",
        place_of_loading: "EGALE",
        place_of_receipt: "EGDHL",
        pre_vessel_code: "TCC",
        pre_vessel_name: "SONGA CALABRIA",
        pre_voyage_number: "020N",
        quarantine_coding: null,
        shipping_and_carrier_number: "PSD05049027",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "1250",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "1250",
          sequence_number: 7,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SSD",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "190",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "FRI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "190",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "5",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "DOC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "5",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ADD",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190607",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "PREPAID",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "OCEAN FREIGHT PREPAID",
            up_remark_2: "ON FI-FO TERM",
            up_remark_3: "SHIPPER'S LOAD STOW COUNT AND SEAL"
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: PSD05049027V1",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "PR KEMAL TERZIEV",
            consignee_2: "BULGARIA",
            consignee_3: null,
            consignee_code: null,
            tag: 21
          },
          {
            consignee_1: "EFESA EOOD",
            consignee_2: "VAT BG 204649746",
            consignee_3: "CR KRICHIM \\ VL -DRVJBA 8",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "PR KEMAL TERZIEV",
            notified_data_2: "BULGARIA",
            notified_data_3: null,
            notified_party_sequence_number: 1,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "EFESA EOOD",
            notified_data_2: "VAT BG 204649746",
            notified_data_3: "CR KRICHIM \\ VL -DRVJBA 8",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "E-MAIL: CONTACT@ALSALAMALDAWLIA.COM",
            shipper_2: null,
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "ALSALAM ALDAWLEIA CO FOR EXPORT",
            shipper_2: "ELBEHIRA _ EGYPT",
            shipper_3: "TEL: 00201005003161",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA,BG",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "WHITE BEANS",
              cargo_description_2: "TOTAL GROSS WEIGHT = 24100 KG",
              cargo_description_3: "TOTAL NET WEIGHT = 24000 KG",
              cargo_description_4: "TOTAL PACKAGES = 960 PACKAGES",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: null,
            cargo_sequence_number: 1,
            cargo_weight_gross: "24100",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 960,
            package_kind_code: "PK",
            package_kind_description: "PACKAGE",
            tag: 41,
            unknown: "000024100000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "24100",
              container_cycfs_item: "FI-FO",
              container_kind_of_packages: "PK",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "FCIU5469536",
              container_number_of_packages: 960,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "10804832",
              stowage_location: null,
              tag: 51,
              unknown: "GC2410000010804832"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "FI-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COEU9002285790",
        bol_prepaid_or_collect: "Prepaid",
        bol_prepaid_or_collect_code: "P",
        loading_date: "2019-06-05",
        place_of_loading: "EGALE",
        place_of_receipt: "EGDHL",
        pre_vessel_code: "BMH",
        pre_vessel_name: "BOMAR HERMES",
        pre_voyage_number: "020W",
        quarantine_coding: null,
        shipping_and_carrier_number: "ALE00343015V",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "225",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "225",
          sequence_number: 7,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SSD",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "1250",
          currency: "EGP",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "FRI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "1250",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "EBS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "5",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "DOC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "5",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190605",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "PREPAID",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "OCEAN FREIGHT PREPAID",
            up_remark_2: "ON FI-FO TERM",
            up_remark_3: "SHIPPER'S LOAD STOW COUNT AND SEAL"
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: ALE00343015V1",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "BULGARIA",
            consignee_2: null,
            consignee_3: null,
            consignee_code: null,
            tag: 21
          },
          {
            consignee_1: "RBL FOOD BULGARIA LTD",
            consignee_2: "8. HAN ASPARUH STR .",
            consignee_3: "VARNA 9000.",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "BULGARIA",
            notified_data_2: null,
            notified_data_3: null,
            notified_party_sequence_number: 1,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "RBL FOOD BULGARIA LTD",
            notified_data_2: "8. HAN ASPARUH STR .",
            notified_data_3: "VARNA 9000.",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "EGYPT",
            shipper_2: "TEL 01010102304",
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "ALYOUSEF FOR IMPORT & EXPORT",
            shipper_2: "KOM SHERIK, KOM HAMADA,",
            shipper_3: "BEHIRA,",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA,BG",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "TOTAL BAGS = 5760PLASTIC BAGS",
              cargo_description_2: "TOTAL PALLETS = 96PALLETS",
              cargo_description_3: "HS-CODE: 39021000",
              cargo_description_4: null,
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "BAGS/CONTAINER=960PLASTIC BAGS",
              cargo_description_2: "PALLETS/CONTAINER=16PALLETS",
              cargo_description_3: "TOTAL NET WEIGHT: 144 MT",
              cargo_description_4: "TOTAL GROSS WEIGHT:146.76MT",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "NET WEIGHT PER EACH CONTAINER:",
              cargo_description_2: "24 MT",
              cargo_description_3: "GROSS WEIGHT PER EACH",
              cargo_description_4: "CONTAINER:24.460 MT",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "GOODS ARE PACKED IN PLASTIC",
              cargo_description_2: "BAG 25 KG EACH",
              cargo_description_3: "ON WOODEN PALLETS EACH PALLET",
              cargo_description_4: "CONTAINS 60 BAGS",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "144 MT POLYPROPYLENE GRANULES",
              cargo_description_2: "(ORIENTENE RF03)",
              cargo_description_3: "ORDER NUMBER:",
              cargo_description_4: "BDCPO19-001914-BDCST19000665",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: null,
            cargo_sequence_number: 1,
            cargo_weight_gross: "146760",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 96,
            package_kind_code: "PL",
            package_kind_description: "PALLET",
            tag: 41,
            unknown: "000146760000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "24460",
              container_cycfs_item: "FI-FO",
              container_kind_of_packages: "PL",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "DFSU6076033",
              container_number_of_packages: 16,
              container_size_and_type_iso_code: "4510",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "10800097",
              stowage_location: null,
              tag: 51,
              unknown: "GC2446000010800097"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "24460",
              container_cycfs_item: "FI-FO",
              container_kind_of_packages: "PL",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "CBHU9104184",
              container_number_of_packages: 16,
              container_size_and_type_iso_code: "4510",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "10800100",
              stowage_location: null,
              tag: 51,
              unknown: "GC2446000010800100"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "24460",
              container_cycfs_item: "FI-FO",
              container_kind_of_packages: "PL",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "CAIU4793650",
              container_number_of_packages: 16,
              container_size_and_type_iso_code: "4510",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "10800095",
              stowage_location: null,
              tag: 51,
              unknown: "GC2446000010800095"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "24460",
              container_cycfs_item: "FI-FO",
              container_kind_of_packages: "PL",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "TGBU5010711",
              container_number_of_packages: 16,
              container_size_and_type_iso_code: "4510",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "10800099",
              stowage_location: null,
              tag: 51,
              unknown: "GC2446000010800099"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "24460",
              container_cycfs_item: "FI-FO",
              container_kind_of_packages: "PL",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "FCIU9853302",
              container_number_of_packages: 16,
              container_size_and_type_iso_code: "4510",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "10800098",
              stowage_location: null,
              tag: 51,
              unknown: "GC2446000010800098"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "24460",
              container_cycfs_item: "FI-FO",
              container_kind_of_packages: "PL",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "CSNU6848534",
              container_number_of_packages: 16,
              container_size_and_type_iso_code: "4510",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "10800096",
              stowage_location: null,
              tag: 51,
              unknown: "GC2446000010800096"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "FI-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COEU9002283920",
        bol_prepaid_or_collect: "Prepaid",
        bol_prepaid_or_collect_code: "P",
        loading_date: "2019-06-05",
        place_of_loading: "EGALE",
        place_of_receipt: "EGDHL",
        pre_vessel_code: "BMH",
        pre_vessel_name: "BOMAR HERMES",
        pre_voyage_number: "020W",
        quarantine_coding: null,
        shipping_and_carrier_number: "PSD05351022",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "1200",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "6",
          rate_of_freight_charge: "200",
          sequence_number: 7,
          tag: 61,
          unknown: null
        },
        {
          amount: "90",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SSD",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "6",
          rate_of_freight_charge: "15",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "13500",
          currency: "EGP",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "FRI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "6",
          rate_of_freight_charge: "2250",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "300",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "EBS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "6",
          rate_of_freight_charge: "50",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "30",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "DOC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "6",
          rate_of_freight_charge: "5",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "90",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "6",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190605",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "PREPAID",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "14 DAYS FREE TIME AT POD PER PSD053",
            up_remark_2: "51 --SEUR1076758",
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "OCEAN FREIGHT PREPAID",
            up_remark_2: "ON FI-FO TERM",
            up_remark_3: "SHIPPER'S LOAD STOW COUNT AND SEAL"
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: PSD05351022V1",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "TO THE ORDER OF",
            consignee_2: "ING BELGIUM, BRUSSELS GENEVA BRANCH",
            consignee_3: null,
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "TEL:+35929744968",
            notified_data_2: null,
            notified_data_3: null,
            notified_party_sequence_number: 3,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "BULDING 13 BG(BULGARIA)",
            notified_data_2: null,
            notified_data_3: null,
            notified_party_sequence_number: 2,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "SYNTHESIA LTD",
            notified_data_2: "REGISTRATION N:121306542",
            notified_data_3: "MLADOST 4, BUSINESS PARK SOFIA 1,",
            notified_party_sequence_number: 2,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "LEVEL NO 1 JEWELLERY & GEMPLEX 3",
            notified_data_2: "DUBAI UNITED ARAB EMIRATES",
            notified_data_3: null,
            notified_party_sequence_number: 1,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "BGN INT DMCC",
            notified_data_2: "UNIT NO: 164",
            notified_data_3: "DMCC BUSINESS CENTRE",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "GULF OF SUEZ",
            shipper_2: "P.O. BOX:83 SUEZ,EGYPT",
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "ORIENTAL PETROCHEMICALS COMPANY",
            shipper_2: "(OPC)",
            shipper_3: "NINTH INDUSTRIAL ZONE   NORTHWEST",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA,BG",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "VIN: WP0AA2A73GL000544",
              cargo_description_2: null,
              cargo_description_3: null,
              cargo_description_4: null,
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "USED AUTO: 2016 NISSAN ROGUE",
              cargo_description_2: "VIN: KNMAT2MV6GP709272",
              cargo_description_3: "USED AUTO: 2016 PORSCHE",
              cargo_description_4: "PANAMERA",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "USED AUTO: 2013 AUDI S5",
              cargo_description_2: "VIN: WAUGGAFRXDA020453",
              cargo_description_3: "USED AUTO: 2015 MERCEDES ML",
              cargo_description_4: "VIN: 4JGDA5HB2FA553698",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: null,
            cargo_sequence_number: 1,
            cargo_weight_gross: "6655",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 4,
            package_kind_code: "UT",
            package_kind_description: "UNIT",
            tag: 41,
            unknown: "000006655000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "6655",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "UT",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "CBHU9452180",
              container_number_of_packages: 4,
              container_size_and_type_iso_code: "4510",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "008041",
              stowage_location: null,
              tag: 51,
              unknown: "GC06655000008041"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "CY-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COSU8022305950",
        bol_prepaid_or_collect: "Prepaid",
        bol_prepaid_or_collect_code: "P",
        loading_date: "2019-05-06",
        place_of_loading: "USNYK",
        place_of_receipt: "USNYK",
        pre_vessel_code: "NH7",
        pre_vessel_name: "TEXAS TRIUMPH",
        pre_voyage_number: "011E",
        quarantine_coding: null,
        shipping_and_carrier_number: "CHN19001",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "725",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "725",
          sequence_number: 5,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "PSD",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "35",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "DOR",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "35",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "DCI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190506",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "ON CONTRARY TO U.S. LAW",
            up_remark_2: "IS PROHIBITED.",
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "FROM THE UNITED STATES IN ACCORDANC",
            up_remark_2: "E WITH THE EXPORT",
            up_remark_3: "ADMINISTRATION REGULATIONS. DIVERSI"
          },
          {
            tag: 71,
            up_remark_1: "SHIPPER'S LOAD STOW COUNT AND SEAL",
            up_remark_2: "THESE COMMODITIES, TECHNOLOGIES OR",
            up_remark_3: "SOFTWARE WERE EXPORTED"
          },
          {
            tag: 71,
            up_remark_1: "OCEAN FREIGHT PREPAID",
            up_remark_2: "AES X20190423730852 , X201904237312",
            up_remark_3: "57 , X20190423732049"
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: CHN19001",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "PHONE: +359 2 9151144 FAX: +359 2",
            consignee_2: "9151145 EMAIL: VENKO@FREELINE.BG",
            consignee_3: null,
            consignee_code: null,
            tag: 21
          },
          {
            consignee_1: "FREELINE LTD",
            consignee_2: "1, KRASTYO SARAFOV, FLOOR 1.",
            consignee_3: "SOFIA, 1164 BULGARIA",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "PHONE: +359 2 9151144 FAX: +359 2",
            notified_data_2: "9151145 EMAIL: VENKO@FREELINE.BG",
            notified_data_3: null,
            notified_party_sequence_number: 1,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "FREELINE LTD",
            notified_data_2: "1, KRASTYO SARAFOV, FLOOR 1.",
            notified_data_3: "SOFIA, 1164 BULGARIA",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "USA",
            shipper_2: null,
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "USA INTERCARGO LLC",
            shipper_2: "564 INDUSTRIAL DR.",
            shipper_3: "CARMEL IN 46032",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "AUTOMOBILE TEMPERED SAFETY",
              cargo_description_2: "GLASS",
              cargo_description_3: "*TEL:021-65973631",
              cargo_description_4: "FAX:021-65973818",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: "34.66",
            cargo_sequence_number: 1,
            cargo_weight_gross: "18935",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 115,
            package_kind_code: "PL",
            package_kind_description: "PALLET",
            tag: 41,
            unknown: "000018935000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "34.66",
              container_cargo_weight_kg: "18935",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "PL",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "CBHU6382330",
              container_number_of_packages: 115,
              container_size_and_type_iso_code: "4310",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "CH942695",
              stowage_location: null,
              tag: 51,
              unknown: "GC18935000CH942695"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "SP19007"
                }
              ],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "CY-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COSU6214048400W",
        bol_prepaid_or_collect: "Prepaid",
        bol_prepaid_or_collect_code: "P",
        loading_date: "2019-05-20",
        place_of_loading: "CNSHA",
        place_of_receipt: "CNSHA",
        pre_vessel_code: "CNF",
        pre_vessel_name: "COSCO SHIPPING LEO",
        pre_voyage_number: "006W",
        quarantine_coding: null,
        shipping_and_carrier_number: "ELB19033",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "1550",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: "CNFUZ",
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "1550",
          sequence_number: 11,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "982",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "THC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: "CNFUZ",
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "982",
          sequence_number: 10,
          tag: 61,
          unknown: null
        },
        {
          amount: "30",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SLF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: "CNFUZ",
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "30",
          sequence_number: 9,
          tag: 61,
          unknown: null
        },
        {
          amount: "12",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "PSL",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: "CNFUZ",
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "12",
          sequence_number: 8,
          tag: 61,
          unknown: null
        },
        {
          amount: "10",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "PSF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "10",
          sequence_number: 7,
          tag: 61,
          unknown: null
        },
        {
          amount: "274",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "MIS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: "CNFUZ",
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "274",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: "CNFUZ",
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "30",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "EIR",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: "CNFUZ",
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "30",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "450",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "DOC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: "CNFUZ",
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "450",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "5",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "CAS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "5",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190520",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "PREPAID",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "PAYMENT CURRENCY-RMB&USD",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "LIMITED 91310000736655579G(SAP ID-6",
            up_remark_2: "664084000)",
            up_remark_3: "PAYMENT OFFICE-FOC"
          },
          {
            tag: 71,
            up_remark_1: "FREIGHT PREIGHT AT FOC",
            up_remark_2: "PAYER SAP ID-FUYAO(SHANGHAI)AUTOMOB",
            up_remark_3: "ILE GLASS COMPANY"
          },
          {
            tag: 71,
            up_remark_1: "ON CY-FO TERM",
            up_remark_2: "SHIPPER'S LOAD STOW COUNT AND SEAL",
            up_remark_3: "OCEAN FREIGHT PREPAID"
          },
          {
            tag: 71,
            up_remark_1: "SEAWAY BILL ISSUED",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: ELB19033",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "KRASIMIRA ANASTASOVA",
            consignee_2: "TEL:+35942610522",
            consignee_3: null,
            consignee_code: null,
            tag: 21
          },
          {
            consignee_1: "STANDARD PROFIL BULGARIA EAD",
            consignee_2: "NIKOLA PETKOV STR.12",
            consignee_3: "STARA ZAGORA,6000 BULGARIA",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "PHONE:+359 52 702-594",
            notified_data_2: "TEL:+359 52 627-740",
            notified_data_3: null,
            notified_party_sequence_number: 1,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "RHENUS BULGARIA OOD,",
            notified_data_2: "45 ALEKSANDAR DYAKOVICH,FLOOR 4,",
            notified_data_3: "OFFICE 29,BG-9000 VARNA,BULGARIA",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "JIADING DISTRICT,SHANGHAI,CHINA*",
            shipper_2: null,
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "FUYAO GROUP SHANGHAI AUTOMOBILE",
            shipper_2: "GLASS CO,LTD",
            shipper_3: "NO.588 YUANFU ROAD,ANTING TOWN,",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "EIGHT.BG",
              cargo_description_2: "***E-MAIL:CONTAINERS@TRIDENT-F",
              cargo_description_3: "REIGHT.BG",
              cargo_description_4: null,
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "DRAWER SLIDE",
              cargo_description_2: "*TEL: (86)-21-51534555",
              cargo_description_3: "FAX: (86)-21-51534500",
              cargo_description_4: "**E-MAIL:CONTAINERS@TRIDENT-FR",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: "26.62",
            cargo_sequence_number: 1,
            cargo_weight_gross: "20518",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 1305,
            package_kind_code: "CT",
            package_kind_description: "CARTON",
            tag: 41,
            unknown: "000020518000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "26.62",
              container_cargo_weight_kg: "20518",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "CT",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "TENU2001849",
              container_number_of_packages: 1305,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "CJ150279",
              stowage_location: null,
              tag: 51,
              unknown: "GC20518000CJ150279"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "N/M"
                }
              ],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "CY-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COSU6214017560W",
        bol_prepaid_or_collect: "Collect",
        bol_prepaid_or_collect_code: "C",
        loading_date: "2019-05-20",
        place_of_loading: "CNSHA",
        place_of_receipt: "CNSHA",
        pre_vessel_code: "CNF",
        pre_vessel_name: "COSCO SHIPPING LEO",
        pre_voyage_number: "006W",
        quarantine_coding: null,
        shipping_and_carrier_number: "VRA00229001",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "800",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "800",
          sequence_number: 13,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "646",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "THC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: "CNWUJ",
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "646",
          sequence_number: 12,
          tag: 61,
          unknown: null
        },
        {
          amount: "30",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SLF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: "CNWUJ",
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "30",
          sequence_number: 11,
          tag: 61,
          unknown: null
        },
        {
          amount: "8",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "PSL",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: "CNWUJ",
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "8",
          sequence_number: 10,
          tag: 61,
          unknown: null
        },
        {
          amount: "10",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "PSF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "10",
          sequence_number: 9,
          tag: 61,
          unknown: null
        },
        {
          amount: "177",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "MIS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: "CNWUJ",
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "177",
          sequence_number: 8,
          tag: 61,
          unknown: null
        },
        {
          amount: "100",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "HCS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "100",
          sequence_number: 7,
          tag: 61,
          unknown: null
        },
        {
          amount: "94",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "FAF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "94",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: "CNWUJ",
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "30",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "EIR",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: "CNWUJ",
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "30",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "450",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "DOC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: "CNWUJ",
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "450",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "5",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "CAS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "5",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190520",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "COLLECT",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "ON CY-FO TERM",
            up_remark_2: "SHIPPER'S LOAD STOW COUNT AND SEAL",
            up_remark_3: "OCEAN FREIGHT COLLECT"
          },
          {
            tag: 71,
            up_remark_1: "SEAWAY BILL ISSUED",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: VRA00229001V2",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "TEL:+359 52 681 722**",
            consignee_2: null,
            consignee_3: null,
            consignee_code: null,
            tag: 21
          },
          {
            consignee_1: "TRIDENT FREIGHT LTD",
            consignee_2: "46,RAIKO JINZIFOV STR.",
            consignee_3: "9000 VARNA,BULGARIA",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "TEL:+359 52 681 722***",
            notified_data_2: null,
            notified_data_3: null,
            notified_party_sequence_number: 1,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "TRIDENT FREIGHT LTD",
            notified_data_2: "46,RAIKO JINZIFOV STR.",
            notified_data_3: "9000 VARNA,BULGARIA",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "200082 CHINA",
            shipper_2: "USCI NO.: 91310109749252306G*",
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "KORMAN SHIPPING CO., LTD",
            shipper_2: "ROOM E,6/F,NO.359 DONG DA MING",
            shipper_3: "ROAD,HONGKOU DISTRICT,SHANGHAI",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA,BG",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "DESTINATION",
              cargo_description_2: null,
              cargo_description_3: null,
              cargo_description_4: null,
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "BUANA OCEAN 08 VOY. B90528",
              cargo_description_2: "AS AT BATAM, INDONESIA ON",
              cargo_description_3: "27 MAY 2019",
              cargo_description_4: "14 DAYS FREE DETENTION AT",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "VESSEL COSCO SHIPPING",
              cargo_description_2: "CAPRICORN VOY. 005W",
              cargo_description_3: "SHIPPED ON BOARD ON",
              cargo_description_4: "PRE-CARRIAGE VESSEL",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "SHIPPER'S REF: 1010711574/",
              cargo_description_2: "2010711574",
              cargo_description_3: "CUSTOMER ORDER NO. PO298",
              cargo_description_4: "TRANSHIPMENT AT SINGAPORE ON",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "HS CODE: 3823.70",
              cargo_description_2: "PACKAGING:",
              cargo_description_3: "(600 BAGS X 20 KGS)",
              cargo_description_4: "= 12.000 MT/FCL",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "1 X 20 FEET CONTAINER",
              cargo_description_2: "12.000 MT OF ECOROL 68/50P",
              cargo_description_3: "(CETYL STEARYL ALCOHOL",
              cargo_description_4: "PASTILLES)",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: "25",
            cargo_sequence_number: 1,
            cargo_weight_gross: "12890",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 600,
            package_kind_code: "BG",
            package_kind_description: "BAG",
            tag: 41,
            unknown: "000012890000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "25",
              container_cargo_weight_kg: "12890",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "BG",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "BSIU2652772",
              container_number_of_packages: 600,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "ID407308",
              stowage_location: null,
              tag: 51,
              unknown: "GC12890000ID407308"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "ECOROL 68/50P"
                },
                {
                  key: null,
                  value: "NET WEIGHT: 20"
                },
                {
                  key: null,
                  value: "KGS"
                },
                {
                  key: null,
                  value: "BATCH NO.:"
                },
                {
                  key: null,
                  value: "B327-M"
                }
              ],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "CY-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COSU6213206720",
        bol_prepaid_or_collect: "Prepaid",
        bol_prepaid_or_collect_code: "P",
        loading_date: "2019-05-27",
        place_of_loading: "IDBMP",
        place_of_receipt: "IDBTI",
        pre_vessel_code: "CNG",
        pre_vessel_name: "COSCO SHIPPING CAPRI",
        pre_voyage_number: "005W",
        quarantine_coding: null,
        shipping_and_carrier_number: "SIN07194010V",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "1050",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: "SGSGP",
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "1050",
          sequence_number: 10,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "10",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SLF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: "SGSGP",
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "10",
          sequence_number: 9,
          tag: 61,
          unknown: null
        },
        {
          amount: "10",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "PSF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "10",
          sequence_number: 8,
          tag: 61,
          unknown: null
        },
        {
          amount: "94",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "FAF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: "SGSGP",
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "94",
          sequence_number: 7,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: "SGSGP",
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "10",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "DOC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: "SGSGP",
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "10",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "100000",
          currency: "IDR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "CST",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: "SGSGP",
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "100000",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "5",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "CAS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "5",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "300",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ARB",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: "SGSGP",
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "300",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190527",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "PREPAID",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "PLEASE AMEND FEEDER : BUANA OCEAN 0",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "ON CY-FO TERM",
            up_remark_2: "SHIPPER'S LOAD STOW COUNT AND SEAL",
            up_remark_3: "OCEAN FREIGHT PREPAID"
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: SIN07194001V5",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "BULGARIA",
            consignee_2: "ATTN: SIMEON KACHAMAKOV",
            consignee_3: null,
            consignee_code: null,
            tag: 21
          },
          {
            consignee_1: "MONOCHEM LTD",
            consignee_2: "30, DAMIAN GRUEV STR",
            consignee_3: "BG 1606 SOFIA",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "BULGARIA",
            notified_data_2: "ATTN: SIMEON KACHAMAKOV",
            notified_data_3: null,
            notified_party_sequence_number: 1,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "MONOCHEM LTD",
            notified_data_2: "30, DAMIAN GRUEV STR",
            notified_data_3: "BG 1606 SOFIA",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "TELEPHONE : (62-778) 711002",
            shipper_2: "FACSIMILE : (62-778) 711007",
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "PT. ECOGREEN OLEOCHEMICALS",
            shipper_2: "JL. PELABUHAN KAV.1, KABIL,",
            shipper_3: "BATAM ISLAND 29467 INDONESIA",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA, BULGARIA",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "IN 40 FT CONTAINER.",
              cargo_description_2: null,
              cargo_description_3: null,
              cargo_description_4: null,
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "PP HJ541CP 144MT",
              cargo_description_2: "EXPORT STANDARD PACKING",
              cargo_description_3: "(750KG BIG BAG WITH PE LINER",
              cargo_description_4: "INSIDE ON PLTS)",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: "225",
            cargo_sequence_number: 1,
            cargo_weight_gross: "144691",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 192,
            package_kind_code: "BG",
            package_kind_description: "BAG",
            tag: 41,
            unknown: "000144691000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "37.5",
              container_cargo_weight_kg: "24115.1",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "BG",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "FCIU7210354",
              container_number_of_packages: 32,
              container_size_and_type_iso_code: "4510",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "10510252",
              stowage_location: null,
              tag: 51,
              unknown: "GC2411510010510252"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "37.5",
              container_cargo_weight_kg: "24115.1",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "BG",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "BSIU9580083",
              container_number_of_packages: 32,
              container_size_and_type_iso_code: "4510",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "10504718",
              stowage_location: null,
              tag: 51,
              unknown: "GC2411510010504718"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "37.5",
              container_cargo_weight_kg: "24115.1",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "BG",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "CSLU6148446",
              container_number_of_packages: 32,
              container_size_and_type_iso_code: "4510",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "10510578",
              stowage_location: null,
              tag: 51,
              unknown: "GC2411510010510578"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "37.5",
              container_cargo_weight_kg: "24115.1",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "BG",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "TCNU3829860",
              container_number_of_packages: 32,
              container_size_and_type_iso_code: "4510",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "10510587",
              stowage_location: null,
              tag: 51,
              unknown: "GC2411510010510587"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "37.5",
              container_cargo_weight_kg: "24115.5",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "BG",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "TEMU7172922",
              container_number_of_packages: 32,
              container_size_and_type_iso_code: "4510",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "10510631",
              stowage_location: null,
              tag: 51,
              unknown: "GC2411550010510631"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "37.5",
              container_cargo_weight_kg: "24115.1",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "BG",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "OOLU6809406",
              container_number_of_packages: 32,
              container_size_and_type_iso_code: "4510",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "10510751",
              stowage_location: null,
              tag: 51,
              unknown: "GC2411510010510751"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "THE SIDE"
                },
                {
                  key: null,
                  value: "------------"
                },
                {
                  key: null,
                  value: "HJ541CP"
                }
              ],
              tag: 44
            },
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "THE FRONT"
                },
                {
                  key: null,
                  value: "------------"
                },
                {
                  key: null,
                  value: "TOPILENE"
                },
                {
                  key: null,
                  value: "HYOSUNG PP"
                },
                {
                  key: null,
                  value: "POLYPROPYLENE"
                },
                {
                  key: null,
                  value: "NET WT.:750KGS"
                }
              ],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "CY-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COSU6211964380",
        bol_prepaid_or_collect: "Prepaid",
        bol_prepaid_or_collect_code: "P",
        loading_date: "2019-05-12",
        place_of_loading: "KRBUS",
        place_of_receipt: "KRBUS",
        pre_vessel_code: "CNG",
        pre_vessel_name: "COSCO SHIPPING CAPRI",
        pre_voyage_number: "005W",
        quarantine_coding: null,
        shipping_and_carrier_number: "SEL03970040",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "7500",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "6",
          rate_of_freight_charge: "1250",
          sequence_number: 11,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "930000",
          currency: "KRW",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "THC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "6",
          rate_of_freight_charge: "155000",
          sequence_number: 10,
          tag: 61,
          unknown: null
        },
        {
          amount: "48000",
          currency: "KRW",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SLF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "6",
          rate_of_freight_charge: "8000",
          sequence_number: 9,
          tag: 61,
          unknown: null
        },
        {
          amount: "60",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "PSF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "6",
          rate_of_freight_charge: "10",
          sequence_number: 8,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 7,
          tag: 61,
          unknown: null
        },
        {
          amount: "40",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENA",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "40",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "40000",
          currency: "KRW",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "DOC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "40000",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "30",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "CAS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "6",
          rate_of_freight_charge: "5",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "90",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "6",
          rate_of_freight_charge: "15",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "1032",
          currency: "KRW",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "271",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "6",
          rate_of_freight_charge: "172",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "53040",
          currency: "KRW",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "132",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "6",
          rate_of_freight_charge: "8840",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190512",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "PREPAID",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "1007732-1007737",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "0991680-0991685 IS RETURNED",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "0991680-0991685",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "OCEAN FREIGHT PREPAID",
            up_remark_2: "ON CY-FO TERM",
            up_remark_3: "SHIPPER'S LOAD STOW COUNT AND SEAL"
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: SEL03970040V6",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "VAT NUMBER IT 02483450017",
            consignee_2: "PH. +39.011.7721139 #",
            consignee_3: null,
            consignee_code: null,
            tag: 21
          },
          {
            consignee_1: "TO THE ORDER OF TECNOPOL SPA",
            consignee_2: "CORSO FRANCIA 252/A",
            consignee_3: "10146 TORINO-ITALY",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "# E-MAIL",
            notified_data_2: "BARBARA.MASSA@TECNOPOL.COM",
            notified_data_3: null,
            notified_party_sequence_number: 2,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "VAT NUMBER BG 115076001",
            notified_data_2: null,
            notified_data_3: null,
            notified_party_sequence_number: 1,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "GOTMAR LTD",
            notified_data_2: "3 SHIPKA STR",
            notified_data_3: "4190 SAEDINENIE (BULGARIA)",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "SEOUL, KOREA",
            shipper_2: "TEL:82-2-735-0911",
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "CHOHAN CORPORATION",
            shipper_2: "ROOM 502,BAEKSANG BLDG.,12",
            shipper_3: "INSADONG 7-GIL JONGRO-GU,",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA,BULGARIA",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "CELLULOSE ETHER(MECELLOSE)",
              cargo_description_2: "FMC23021 20K",
              cargo_description_3: "*HS CODE: 3912.39.8590",
              cargo_description_4: "*P/O NO: 18-SOF00492",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: "57.6",
            cargo_sequence_number: 1,
            cargo_weight_gross: "20483",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 960,
            package_kind_code: "BG",
            package_kind_description: "BAG",
            tag: 41,
            unknown: "000020483000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "57.6",
              container_cargo_weight_kg: "20483",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "BG",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "CCLU4778532",
              container_number_of_packages: 960,
              container_size_and_type_iso_code: "4310",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "10508143",
              stowage_location: null,
              tag: 51,
              unknown: "GC2048300010508143"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "LOTTE FINE"
                },
                {
                  key: null,
                  value: "CHEMICAL"
                },
                {
                  key: null,
                  value: "CO., LTD."
                },
                {
                  key: null,
                  value: "MADE IN KOREA"
                }
              ],
              tag: 44
            },
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "MECELLOSE"
                },
                {
                  key: null,
                  value: "CELLULOSE ETHER"
                },
                {
                  key: null,
                  value: "(HPMC)"
                },
                {
                  key: null,
                  value: "FMC-23021"
                },
                {
                  key: null,
                  value: "LOT NO:"
                },
                {
                  key: null,
                  value: "NET WT: 20KG"
                }
              ],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "CY-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COSU6211943560",
        bol_prepaid_or_collect: "Prepaid",
        bol_prepaid_or_collect_code: "P",
        loading_date: "2019-04-29",
        place_of_loading: "KRBUS",
        place_of_receipt: "KRBUS",
        pre_vessel_code: "CHE",
        pre_vessel_name: "COSCO SHIPPING RHINE",
        pre_voyage_number: "011W",
        quarantine_coding: null,
        shipping_and_carrier_number: "SEL08138004",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "1250",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "1250",
          sequence_number: 10,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "155000",
          currency: "KRW",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "THC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "155000",
          sequence_number: 9,
          tag: 61,
          unknown: null
        },
        {
          amount: "8000",
          currency: "KRW",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SLF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "8000",
          sequence_number: 8,
          tag: 61,
          unknown: null
        },
        {
          amount: "10",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "PSF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "10",
          sequence_number: 7,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "40000",
          currency: "KRW",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "DOC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "40000",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "5",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "CAS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "5",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "172",
          currency: "KRW",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "271",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "172",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "8840",
          currency: "KRW",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "132",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "8840",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190429",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "PREPAID",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "0971329-31",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "OCEAN FREIGHT PREPAID",
            up_remark_2: "ON CY-FO TERM",
            up_remark_3: "SHIPPER'S LOAD STOW COUNT AND SEAL"
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: SEL08138004V13",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "TEL:00359 2 445 6161",
            consignee_2: "E-MAIL:INFO.SOFIA@ELTON-GROUP.COM",
            consignee_3: null,
            consignee_code: null,
            tag: 21
          },
          {
            consignee_1: "ELTON CORPORATION LTD.-BULGARIA",
            consignee_2: "35 NUMBER 78 BOGROV, 1855 SOFIA",
            consignee_3: "1855 BULGARIA",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "TEL:00359 2 445 6161",
            notified_data_2: "E-MAIL:INFO.SOFIA@ELTON-GROUP.COM",
            notified_data_3: null,
            notified_party_sequence_number: 1,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "ELTON CORPORATION LTD.-BULGARIA",
            notified_data_2: "35 NUMBER 78 BOGROV, 1855 SOFIA",
            notified_data_3: "1855 BULGARIA",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "SEOUL, KOREA 06181",
            shipper_2: null,
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "LOTTE FINE CHEMICAL CO., LTD.",
            shipper_2: "26F-27F GLASSTOWER BLDG.,",
            shipper_3: "534 TEHERAN-RO, GANGNAM-GU,",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA,BULGARIA",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "ED:2010406229919",
              cargo_description_2: null,
              cargo_description_3: null,
              cargo_description_4: null,
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "1X20' FCL CONTAINER STC",
              cargo_description_2: "10 PKG OF AMUSEMENT RIDE GAMES",
              cargo_description_3: "SHIPPED ON BOARD",
              cargo_description_4: "FREIGHT COLLECT",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: null,
            cargo_sequence_number: 1,
            cargo_weight_gross: "2000",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 10,
            package_kind_code: "PK",
            package_kind_description: "PACKAGE",
            tag: 41,
            unknown: "000002000000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "2000",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "PK",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "BSIU2947897",
              container_number_of_packages: 10,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "0230951",
              stowage_location: null,
              tag: 51,
              unknown: "GC020000000230951"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "N/M"
                }
              ],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "CY-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COSU6209326210",
        bol_prepaid_or_collect: "Collect",
        bol_prepaid_or_collect_code: "C",
        loading_date: "2019-06-05",
        place_of_loading: "AEJAL",
        place_of_receipt: "AEJAL",
        pre_vessel_code: "NGG",
        pre_vessel_name: "BERLIN EXPRESS",
        pre_voyage_number: "004W",
        quarantine_coding: null,
        shipping_and_carrier_number: "VRA00295001",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "550",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "550",
          sequence_number: 9,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "1050",
          currency: "AED",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "THC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "1050",
          sequence_number: 8,
          tag: 61,
          unknown: null
        },
        {
          amount: "20",
          currency: "AED",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SLF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "20",
          sequence_number: 7,
          tag: 61,
          unknown: null
        },
        {
          amount: "10",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "PSF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "10",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "94",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "FAF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "94",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "475",
          currency: "AED",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "DOC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "475",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "5",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "CAS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "5",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190605",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "COLLECT",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "OCEAN FREIGHT COLLECT",
            up_remark_2: "ON CY-FO TERM",
            up_remark_3: "SHIPPER'S LOAD STOW COUNT AND SEAL"
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: VRA00295001V1",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "BULGARIA MR.ALEXANDER ALEXANDROV",
            consignee_2: "KAPRICHEV PHONE: 00447880706035",
            consignee_3: null,
            consignee_code: null,
            tag: 21
          },
          {
            consignee_1: "ULTIMI LTD",
            consignee_2: "4 FELIX KANETZ STREET",
            consignee_3: "VARNA 9000",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "SAME AS CONSIGNEE",
            notified_data_2: null,
            notified_data_3: null,
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "HIGH BAY BUILDING,",
            shipper_2: "DUBAI SILICON OASIS, DUBAI, UAE",
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "MAJID AL FUTTAIM LEISURE AND",
            shipper_2: "ENTERTAINMENT LLC",
            shipper_3: "TECHINICAL WAREHOUSE, WAREHOUSE # 5",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA, BULGARIA",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "L/C NUMBER: 118DSK2975",
              cargo_description_2: "THE CONTAINER TO BE SET AT",
              cargo_description_3: "MINUS 18 DEGREES CELSIUS",
              cargo_description_4: null,
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "(PANGASIUS HYPHOPHTHALMUS)",
              cargo_description_2: "SKINLESS, BONELESS, UNTRIMMED,",
              cargo_description_3: "RED MEAT ON, BELLY ON, FAT ON",
              cargo_description_4: "NET WEIGHT: 25,000.00 KGS",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "ON, FAT ON",
              cargo_description_2: "NET WEIGHT: 25,000.00 KGS",
              cargo_description_3: "L/C NUMBER: 118DSK2975",
              cargo_description_4: "FROZEN PANGASIUS FILLET",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "FROZEN PANGASIUS FILLET",
              cargo_description_2: "(PANGASIUS HYPHOPHTHALMUS)",
              cargo_description_3: "SKINLESS, BONELESS,",
              cargo_description_4: "UNTRIMMED, RED MEAT ON, BELLY",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: "120",
            cargo_sequence_number: 1,
            cargo_weight_gross: "56000",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 5000,
            package_kind_code: "CT",
            package_kind_description: "CARTON",
            tag: 41,
            unknown: "000056000000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "60",
              container_cargo_weight_kg: "28000",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "CT",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "OERU4014568",
              container_number_of_packages: 2500,
              container_size_and_type_iso_code: "4532",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "11779400",
              stowage_location: null,
              tag: 51,
              unknown: "RF2800000011779400"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "60",
              container_cargo_weight_kg: "28000",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "CT",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "SZLU9681931",
              container_number_of_packages: 2500,
              container_size_and_type_iso_code: "4532",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "11787587",
              stowage_location: null,
              tag: 51,
              unknown: "RF2800000011787587"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "N.M"
                }
              ],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {
              cargo_sequence_number: 1,
              class: null,
              ems_number: null,
              flash_point: null,
              is_marine_pollutant: null,
              label_1: "                ",
              label_2: "                ",
              medical_first_aid_guide: null,
              page: null,
              tag: 43,
              temperature_from: "-18",
              temperature_measure: "Celsius",
              temperature_measure_code: "C",
              temperature_to: "-18",
              un_number: null
            }
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "CY-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COSU6208782411",
        bol_prepaid_or_collect: "Prepaid",
        bol_prepaid_or_collect_code: "P",
        loading_date: "2019-06-02",
        place_of_loading: "VNHCM",
        place_of_receipt: "VNHCM",
        pre_vessel_code: "NH2",
        pre_vessel_name: "TAMPA TRIUMPH",
        pre_voyage_number: "013W",
        quarantine_coding: null,
        shipping_and_carrier_number: "0000000",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "2800",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "2",
          rate_of_freight_charge: "1400",
          sequence_number: 9,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "400",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "THC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "2",
          rate_of_freight_charge: "200",
          sequence_number: 8,
          tag: 61,
          unknown: null
        },
        {
          amount: "16",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SLF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "2",
          rate_of_freight_charge: "8",
          sequence_number: 7,
          tag: 61,
          unknown: null
        },
        {
          amount: "20",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "PSF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "2",
          rate_of_freight_charge: "10",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "564",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "FAF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "2",
          rate_of_freight_charge: "282",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "850000",
          currency: "VND",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "DOC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "850000",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "10",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "CAS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "2",
          rate_of_freight_charge: "5",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "30",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "2",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190602",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "PREPAID",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "PLEASE SEND DRAFT BL TO EMAIL: CANT",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "SHIPPER'S LOAD STOW COUNT AND SEAL",
            up_remark_2: "OCEAN FREIGHT PREPAID",
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "BOOKING NUMBERS:",
            up_remark_2: "6208782411  6208782410",
            up_remark_3: "ON CY-FO TERM"
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: SGN01086040V1",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "TO THE ORDER OF VIVECTA BG EOOD",
            consignee_2: "5, KAMENODELSKA STREET,",
            consignee_3: "1202 SOFIA, BULGARIA",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "*VIETNAM",
            notified_data_2: null,
            notified_data_3: null,
            notified_party_sequence_number: 2,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "VIVECTA BG EOOD",
            notified_data_2: "5 KAMENODELSKA STREET, 1202 SOFIA,",
            notified_data_3: "BULGARIA",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "LONG XUYEN CITY, AN GIANG PROVINCE,",
            shipper_2: "VIETNAM.",
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "QUE KY FOODS CORPORATION",
            shipper_2: "236 HUNG VUONG STREET,",
            shipper_3: "MY LONG WARD,",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA, BULGARIA",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "THE CONTAINER TO BE SET AT",
              cargo_description_2: "MINUS 18 DEGREES CELSIUS.",
              cargo_description_3: null,
              cargo_description_4: null,
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "FROZEN PANGASIUS FILLET,",
              cargo_description_2: "UNTRIMMED",
              cargo_description_3: "(PANGASIUS HYPOPHTHALMUS)",
              cargo_description_4: "NET WEIGHT: 25,000.00 (KGS)",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: null,
            cargo_sequence_number: 1,
            cargo_weight_gross: "27000",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 2500,
            package_kind_code: "CT",
            package_kind_description: "CARTON",
            tag: 41,
            unknown: "000027000000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "27000",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "CT",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "OERU4037959",
              container_number_of_packages: 2500,
              container_size_and_type_iso_code: "4532",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "11860679",
              stowage_location: null,
              tag: 51,
              unknown: "RF2700000011860679"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "NM"
                }
              ],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {
              cargo_sequence_number: 1,
              class: null,
              ems_number: null,
              flash_point: null,
              is_marine_pollutant: null,
              label_1: "                ",
              label_2: "                ",
              medical_first_aid_guide: null,
              page: null,
              tag: 43,
              temperature_from: "-18",
              temperature_measure: "Celsius",
              temperature_measure_code: "C",
              temperature_to: "-18",
              un_number: null
            }
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "CY-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COSU6208781710",
        bol_prepaid_or_collect: "Prepaid",
        bol_prepaid_or_collect_code: "P",
        loading_date: "2019-05-31",
        place_of_loading: "VNBRV",
        place_of_receipt: "VNHCM",
        pre_vessel_code: "CJC",
        pre_vessel_name: "COSCO SHIPPING ALPS",
        pre_voyage_number: "009W",
        quarantine_coding: null,
        shipping_and_carrier_number: "SGN02611042",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "1400",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "1400",
          sequence_number: 9,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "200",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "THC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "200",
          sequence_number: 8,
          tag: 61,
          unknown: null
        },
        {
          amount: "8",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SLF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "8",
          sequence_number: 7,
          tag: 61,
          unknown: null
        },
        {
          amount: "10",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "PSF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "10",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "282",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "FAF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "282",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "850000",
          currency: "VND",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "DOC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "850000",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "5",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "CAS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "5",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190531",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "PREPAID",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "HS CODE: 030462 (DO NOT SHOW)",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "ON CY-FO TERM",
            up_remark_2: "SHIPPER'S LOAD STOW COUNT AND SEAL",
            up_remark_3: "OCEAN FREIGHT PREPAID"
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: SGN02611042V1",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "UNIVERSAL FOODS LTD",
            consignee_2: "BULGARIA, SOFIA - 1303,",
            consignee_3: "48 OPALCHENSKA STR",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "# VIETNAM",
            notified_data_2: null,
            notified_data_3: null,
            notified_party_sequence_number: 2,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "UNIVERSAL FOODS LTD",
            notified_data_2: "BULGARIA, SOFIA - 1303,",
            notified_data_3: "48 OPALCHENSKA STR",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "AN GIANG PROVINCE, VIETNAM",
            shipper_2: null,
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "CHO MOI FISHERIES COMPANY LIMITED",
            shipper_2: "716 AN LUONG HAMLET,",
            shipper_3: "HOA BINH COMMUNE, CHO MOI DISTRICT,",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA PORT, BULGARIA",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "TEMPERATURE TO BE",
              cargo_description_2: "SET AT -18.0C",
              cargo_description_3: null,
              cargo_description_4: null,
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "SKINLESS, BONELESS, UNTRIMMED,",
              cargo_description_2: "RED MEAT ON, BELLY ON, FAT ON",
              cargo_description_3: "NET WEIGHT 25.000KGS",
              cargo_description_4: "L/C NUMBER: 118DSK2976",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "NET WEIGHT 25.000KGS",
              cargo_description_2: "L/C NUMBER: 118DSK2976",
              cargo_description_3: "FROZEN PANGASIUS FILLET",
              cargo_description_4: "(PANGASIUS HYPHOPHTHALMUS)",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "FROZEN PANGASIUS FILLET",
              cargo_description_2: "(PANGASIUS HYPHOPHTHALMUS)",
              cargo_description_3: "SKINLESS, BONELESS, UNTRIMMED,",
              cargo_description_4: "RED MEAT ON, BELLY ON, FAT ON",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: "120",
            cargo_sequence_number: 1,
            cargo_weight_gross: "55000",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 5000,
            package_kind_code: "CT",
            package_kind_description: "CARTON",
            tag: 41,
            unknown: "000055000000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "60",
              container_cargo_weight_kg: "27500",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "CT",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "CCLU8607688",
              container_number_of_packages: 2500,
              container_size_and_type_iso_code: "4532",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "11861357",
              stowage_location: null,
              tag: 51,
              unknown: "RF2750000011861357"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "60",
              container_cargo_weight_kg: "27500",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "CT",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "SZLU9671168",
              container_number_of_packages: 2500,
              container_size_and_type_iso_code: "4532",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "11787600",
              stowage_location: null,
              tag: 51,
              unknown: "RF2750000011787600"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "N.M"
                }
              ],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {
              cargo_sequence_number: 1,
              class: null,
              ems_number: null,
              flash_point: null,
              is_marine_pollutant: null,
              label_1: "                ",
              label_2: "                ",
              medical_first_aid_guide: null,
              page: null,
              tag: 43,
              temperature_from: "-18",
              temperature_measure: "Celsius",
              temperature_measure_code: "C",
              temperature_to: "-18",
              un_number: null
            }
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "CY-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COSU6208721951",
        bol_prepaid_or_collect: "Prepaid",
        bol_prepaid_or_collect_code: "P",
        loading_date: "2019-05-26",
        place_of_loading: "VNHCM",
        place_of_receipt: "VNHCM",
        pre_vessel_code: "CNG",
        pre_vessel_name: "COSCO SHIPPING CAPRI",
        pre_voyage_number: "005W",
        quarantine_coding: null,
        shipping_and_carrier_number: "0000000",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "2800",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "2",
          rate_of_freight_charge: "1400",
          sequence_number: 9,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "400",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "THC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "2",
          rate_of_freight_charge: "200",
          sequence_number: 8,
          tag: 61,
          unknown: null
        },
        {
          amount: "16",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SLF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "2",
          rate_of_freight_charge: "8",
          sequence_number: 7,
          tag: 61,
          unknown: null
        },
        {
          amount: "20",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "PSF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "2",
          rate_of_freight_charge: "10",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "564",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "FAF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "2",
          rate_of_freight_charge: "282",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "850000",
          currency: "VND",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "DOC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "850000",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "10",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "CAS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "2",
          rate_of_freight_charge: "5",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "30",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "2",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190526",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "PREPAID",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "PLEASE SEND DRAFT BL TO EMAIL: CANT",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "6208721959: PREPAID",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "6208721959: PLEASE SEND DRAFT BL TO",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "SHIPPER'S LOAD STOW COUNT AND SEAL",
            up_remark_2: "OCEAN FREIGHT PREPAID",
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "BOOKING NUMBERS:",
            up_remark_2: "6208721950  6208721951",
            up_remark_3: "ON CY-FO TERM"
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: SGN01086040V1",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "1202 SOFIA, BULGARIA",
            consignee_2: null,
            consignee_3: null,
            consignee_code: null,
            tag: 21
          },
          {
            consignee_1: "TO THE ORDER OF VIVECTA",
            consignee_2: "BG EOOD",
            consignee_3: "5, KAMENODELSKA STREET,",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "*VIETNAM",
            notified_data_2: null,
            notified_data_3: null,
            notified_party_sequence_number: 2,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "VIVECTA BG EOOD",
            notified_data_2: "5, KAMENODELSKA STREET,",
            notified_data_3: "1202 SOFIA, BULGARIA",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "LONG XUYEN CITY,",
            shipper_2: "AN GIANG PROVINCE, VIETNAM.",
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "QUE KY FOODS CORPORATION",
            shipper_2: "236 HUNG VUONG STREET,",
            shipper_3: "MY LONG WARD,",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA, BULGARIA",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "FREIGHT PREPAID",
              cargo_description_2: null,
              cargo_description_3: null,
              cargo_description_4: null,
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "SALES CONTRACT NO.1903001",
              cargo_description_2: "CUSTOMER PO NO.4500004826",
              cargo_description_3: "FORM E NO. HBL-2019-0000019631",
              cargo_description_4: "INVOICE NO.AIT/2534/2019",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "205 CM, 210 CM",
              cargo_description_2: "100% COTTON 133X65 40X40 PLAIN",
              cargo_description_3: "SATIN",
              cargo_description_4: "280 CM BLEACHED FABRIC NON OBA",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "223 ROLLS - 44,908 METERS",
              cargo_description_2: "POLY COTTON 52:48 FABRIC 76X56",
              cargo_description_3: "30X30",
              cargo_description_4: "AUTOLOOM, BLEACHED FABRIC",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "SHIPPER LOAD STOW & COUNT",
              cargo_description_2: "01 X 20'GP CONTAINER",
              cargo_description_3: "SAID TO CONTAIN",
              cargo_description_4: "10 PALLETS",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: "26",
            cargo_sequence_number: 1,
            cargo_weight_gross: "10309",
            cargo_weight_net: "10023",
            is_cargo_dangerous: false,
            number_of_packages: 223,
            package_kind_code: "RL",
            package_kind_description: "ROLL",
            tag: 41,
            unknown: "000010309000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "26",
              container_cargo_weight_kg: "10309",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "RL",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "BEAU2257320",
              container_number_of_packages: 223,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "10975798",
              stowage_location: null,
              tag: 51,
              unknown: "GC1030900010975798"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "PER ROLL"
                },
                {
                  key: null,
                  value: "BRUTTO:"
                }
              ],
              tag: 44
            },
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "FABRIC NAME:"
                },
                {
                  key: null,
                  value: "GSM: WIDTH:"
                },
                {
                  key: null,
                  value: "COMPOSITION:"
                },
                {
                  key: null,
                  value: "LOT#:"
                },
                {
                  key: null,
                  value: "ROLL#:METERSPE"
                },
                {
                  key: null,
                  value: "R ROLL:METER"
                }
              ],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "CY-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COSU6208150080",
        bol_prepaid_or_collect: "Prepaid",
        bol_prepaid_or_collect_code: "P",
        loading_date: "2019-05-21",
        place_of_loading: "PKKAR",
        place_of_receipt: "PKKAR",
        pre_vessel_code: "S3M",
        pre_vessel_name: "NORTHERN JULIE",
        pre_voyage_number: "009W",
        quarantine_coding: null,
        shipping_and_carrier_number: "KHI05029012",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "800",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "800",
          sequence_number: 6,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "10",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "PSF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "10",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "94",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "FAF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "94",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "5",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "CAS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "5",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190521",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "PREPAID",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "ON CY-FO TERM",
            up_remark_2: "SHIPPER'S LOAD STOW COUNT AND SEAL",
            up_remark_3: "OCEAN FREIGHT PREPAID"
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: KHI05029012V3",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "FAISALABAD, PAKISTAN.",
            consignee_2: null,
            consignee_3: null,
            consignee_code: null,
            tag: 21
          },
          {
            consignee_1: "TO THE ORDER OF",
            consignee_2: "HABIB BANK LIMITED",
            consignee_3: "D-GROUND PEOPLES COLONY",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "KALINEL LTD.",
            notified_data_2: "5600 TROIAN LAKARITZA",
            notified_data_3: "STREET 2 BULGARIA",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "TEL: +92 41 8741541-43",
            shipper_2: "FAX: +92 41 8741550",
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "A.I. TEXTILES",
            shipper_2: "11 KM JARANWALA ROAD",
            shipper_3: "FAISALABAD PAKISTAN",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA, BULGARIA",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "GROSS WT:25.200 MT",
              cargo_description_2: "NET WT:25.000",
              cargo_description_3: null,
              cargo_description_4: null,
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "25 MT SALT",
              cargo_description_2: "PACKED IN 25 KG WPP BAGS",
              cargo_description_3: "E FORM NO:JSB-2019-0000011068",
              cargo_description_4: "DATED:13 MAY 2019",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "SHIPPER LOAD STOW AND COUNT",
              cargo_description_2: "01 X 20' DRY CONTAINER",
              cargo_description_3: "SAID TO CONTAIN",
              cargo_description_4: "25 MT 1000 BAGS",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: "25",
            cargo_sequence_number: 1,
            cargo_weight_gross: "25200",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 1000,
            package_kind_code: "BG",
            package_kind_description: "BAG",
            tag: 41,
            unknown: "000025200000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "25",
              container_cargo_weight_kg: "25200",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "BG",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "CSLU2403538",
              container_number_of_packages: 1000,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "10997749",
              stowage_location: null,
              tag: 51,
              unknown: "GC2520000010997749"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "SALT"
                }
              ],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "CY-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COSU6208148730",
        bol_prepaid_or_collect: "Prepaid",
        bol_prepaid_or_collect_code: "P",
        loading_date: "2019-05-21",
        place_of_loading: "PKKAR",
        place_of_receipt: "PKKAR",
        pre_vessel_code: "S3M",
        pre_vessel_name: "NORTHERN JULIE",
        pre_voyage_number: "009W",
        quarantine_coding: null,
        shipping_and_carrier_number: "KHI03186024",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "800",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "800",
          sequence_number: 6,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "10",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "PSF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "10",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "94",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "FAF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "94",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "5",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "CAS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "5",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190521",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "PREPAID",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "ON CY-FO TERM",
            up_remark_2: "SHIPPER'S LOAD STOW COUNT AND SEAL",
            up_remark_3: "OCEAN FREIGHT PREPAID"
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: KHI03186024V4",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "TO THE ORDER OF",
            consignee_2: "JS BANK LIMITED",
            consignee_3: null,
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "NOREX TRADE EOOD",
            notified_data_2: "144 HRISTO BOTEV STR",
            notified_data_3: "SOFIA BULGARIA",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "KARACHI 74900 PAKISTAN",
            shipper_2: null,
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "MINEX INTERNATIONAL",
            shipper_2: "PLOT # 400 SOUTH STREET 5 SECTOR 7A",
            shipper_3: "KORANGI INDUSTRIAL AREA",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA BULGARIA",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "NET WEIGHT : 7,949.730 KGS",
              cargo_description_2: "S/BILL NO.4438841 DT.",
              cargo_description_3: "25.05.2019",
              cargo_description_4: "FREIGHT PREPAID",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "DTD. 23.02.2019 &",
              cargo_description_2: "SPFL/EXP/1124/2018-2019",
              cargo_description_3: "DTD. 26.03.2019",
              cargo_description_4: "GROSS WEIGHT : 9,682.630 KGS",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "- 5763.620 KGS",
              cargo_description_2: "GROSS WEIGHT : 6692.900 KGS",
              cargo_description_3: "AS PER PROFORMA INVOICE",
              cargo_description_4: "NO.SPFL/EXP/1029/2018-2019",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "GROSS WEIGHT : 2428.140 KGS",
              cargo_description_2: "420 CARTONS",
              cargo_description_3: "SPANDEX 15 A. C. 75/36/2",
              cargo_description_4: "Y040481 - 00010AA OPTIC WHITE",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "GROSS WEIGHT : 561.590 KGS",
              cargo_description_2: "245 CARTONS",
              cargo_description_3: "Y040439-00010AA WHITE -",
              cargo_description_4: "1766.300 KGS",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "SPANDEX 140 DC 50/1 INNER",
              cargo_description_2: "70/34/1 OUTER DR. 4",
              cargo_description_3: "Y040439-00000AA DOPE DYED",
              cargo_description_4: "BLACK - 419.810 KGS",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "POLYESTER COVERED YARN",
              cargo_description_2: "(GIMPED YARN)",
              cargo_description_3: "(H.S. CODE NO: 5606.00.90)",
              cargo_description_4: "54 CARTONS",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "01 X 40' FCL CONTAINER STC",
              cargo_description_2: "TOTAL 20 PALLETS ONLY",
              cargo_description_3: "TOTAL 719 CARTONS ON",
              cargo_description_4: "20 PALLETS",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: null,
            cargo_sequence_number: 1,
            cargo_weight_gross: "9682.6",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 20,
            package_kind_code: "PL",
            package_kind_description: "PALLET",
            tag: 41,
            unknown: "000009682630"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "9682.6",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "PL",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "OOCU7563157",
              container_number_of_packages: 20,
              container_size_and_type_iso_code: "4510",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "11568491",
              stowage_location: null,
              tag: 51,
              unknown: "GC0968263011568491"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "CARTONS NOS AS"
                },
                {
                  key: null,
                  value: "PER PACKING &"
                },
                {
                  key: null,
                  value: "WEIGHT LIST"
                }
              ],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "CY-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COSU6207851720",
        bol_prepaid_or_collect: "Prepaid",
        bol_prepaid_or_collect_code: "P",
        loading_date: "2019-05-29",
        place_of_loading: "INNVA",
        place_of_receipt: "INNVA",
        pre_vessel_code: "S3M",
        pre_vessel_name: "NORTHERN JULIE",
        pre_voyage_number: "009W",
        quarantine_coding: null,
        shipping_and_carrier_number: "RATE AGREED",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "1112",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "1112",
          sequence_number: 7,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "12000",
          currency: "INR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "THC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "12000",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "5",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SLF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "5",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "188",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "FAF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "188",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "3000",
          currency: "INR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "DOC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "3000",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190529",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "PREPAID",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "FAX:   30-210-4290808",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: null,
            up_remark_2: null,
            up_remark_3: "PHONE: 30-210-4290810"
          },
          {
            tag: 71,
            up_remark_1: "18538 PIRAEUS GREECE",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "WEIGHT DECLARED BY SHIPPER",
            up_remark_2: "COSCO SHIPPING LINES (GREECE) S.A.",
            up_remark_3: "85,AKTI MIAOULI & 2,FLESSA STR"
          },
          {
            tag: 71,
            up_remark_1: "OCEAN FREIGHT PREPAID",
            up_remark_2: "ON CY-FO TERM",
            up_remark_3: "SHIPPER'S LOAD STOW COUNT AND SEAL"
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: BOM11724002V1",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "ROUSSE, 7009",
            consignee_2: "BULGARIA",
            consignee_3: null,
            consignee_code: null,
            tag: 21
          },
          {
            consignee_1: "DELTA TEXTILE BULGARIA",
            consignee_2: "DTB BULGARIA MAIN WAREHOUSE",
            consignee_3: "44 TUTRAKAN BLVD",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "ROUSSE, 7009",
            notified_data_2: "BULGARIA",
            notified_data_3: null,
            notified_party_sequence_number: 1,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "DELTA TEXTILE BULGARIA",
            notified_data_2: "DTB BULGARIA MAIN WAREHOUSE",
            notified_data_3: "44 TUTRAKAN BLVD",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "TEL : (91 22) 22 83 4116,",
            shipper_2: "FAX : (91 22) 22 85 1728",
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "SARLA PERFORMANCE FIBERS LTD.",
            shipper_2: "304, ARCADIA, 195, NARIMAN POINT,",
            shipper_3: "MUMBAI  400 021, INDIA.",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA PORT,BULGARIA",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: 'ALLOWED AT DESTINATION"',
              cargo_description_2: "(SSEA1118277)",
              cargo_description_3: null,
              cargo_description_4: null,
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "00KGS/11336.00KGS",
              cargo_description_2: "UNIT SEAL NO : ITEK00843464",
              cargo_description_3: "FREIGHT PREPAID",
              cargo_description_4: '"FOURTEEN(14) DAYS FREETIME',
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "DATED:15/05/2019",
              cargo_description_2: "S.B.NO:4007560",
              cargo_description_3: "DATED:15/05/2019",
              cargo_description_4: "TOTAL GROSS WT./NET WT.:12332.",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "DRG.NO.P-681-01A-50NOS",
              cargo_description_2: "MONO BLOCK STOPPER",
              cargo_description_3: "DRG.NO.P-681-04 Q-R1-343NOS",
              cargo_description_4: "INVOICE NO. 20500049/1920",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "DATE :26/03/2019",
              cargo_description_2: "LADLE SHROUD",
              cargo_description_3: "DRG.NO.P-681-01N-25NOS",
              cargo_description_4: "LADLE SHROUD",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "UNDER ITC CODE :69032090",
              cargo_description_2: "ALUMINA CARBON CONTINUOUS",
              cargo_description_3: "CASTING REFRACTORIES",
              cargo_description_4: "PO NUMBER:4519014340",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "01X20 FCL CONTAINER SAID TO",
              cargo_description_2: "CONTAIN",
              cargo_description_3: "TOTAL 10 (TEN) WOODEN BOXES",
              cargo_description_4: "REFRACTORY MATERIAL FALLING",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: null,
            cargo_sequence_number: 1,
            cargo_weight_gross: "12332",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 10,
            package_kind_code: "WB",
            package_kind_description: "WOODEN BOX",
            tag: 41,
            unknown: "000012332000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "12332",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "WB",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "CCLU3618838",
              container_number_of_packages: 10,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "11692025",
              stowage_location: null,
              tag: 51,
              unknown: "GC1233200011692025"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "MADE IN INDIA"
                }
              ],
              tag: 44
            },
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "1150X1150X"
                },
                {
                  key: null,
                  value: "1660MM"
                },
                {
                  key: null,
                  value: "1150X1150X"
                },
                {
                  key: null,
                  value: "1430MM"
                }
              ],
              tag: 44
            },
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "BULGARIA, BG"
                },
                {
                  key: null,
                  value: "2304"
                },
                {
                  key: null,
                  value: "BOXES NO."
                },
                {
                  key: null,
                  value: "K-681/11-20"
                }
              ],
              tag: 44
            },
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "STOMANA"
                },
                {
                  key: null,
                  value: "INDUSTRY"
                },
                {
                  key: null,
                  value: "AD - PERNIK,"
                },
                {
                  key: null,
                  value: "VLADAJSKO"
                },
                {
                  key: null,
                  value: "VASTANIE STR."
                },
                {
                  key: null,
                  value: "1PERNIK,"
                }
              ],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "CY-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COSU6207840030",
        bol_prepaid_or_collect: "Prepaid",
        bol_prepaid_or_collect_code: "P",
        loading_date: "2019-05-22",
        place_of_loading: "INMUN",
        place_of_receipt: "INMUN",
        pre_vessel_code: "NX4",
        pre_vessel_name: "NORTHERN JADE",
        pre_voyage_number: "018W",
        quarantine_coding: null,
        shipping_and_carrier_number: "BOM12483008",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "856",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "856",
          sequence_number: 7,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "7500",
          currency: "INR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "THC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "7500",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "5",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SLF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "5",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "94",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "FAF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "94",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "3000",
          currency: "INR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "DOC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "3000",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190522",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "PREPAID",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "ORIGINAL BL WITH 14 DAYS FREE TIME",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "FAX:   30-210-4290808",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: null,
            up_remark_2: null,
            up_remark_3: "PHONE: 30-210-4290810"
          },
          {
            tag: 71,
            up_remark_1: "18538 PIRAEUS GREECE",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "WEIGHT DECLARED BY SHIPPER",
            up_remark_2: "COSCO SHIPPING LINES (GREECE) S.A.",
            up_remark_3: "85,AKTI MIAOULI & 2,FLESSA STR"
          },
          {
            tag: 71,
            up_remark_1: "OCEAN FREIGHT PREPAID",
            up_remark_2: "ON CY-FO TERM",
            up_remark_3: "SHIPPER'S LOAD STOW COUNT AND SEAL"
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: BOM12483008V1",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "BULGARIA",
            consignee_2: null,
            consignee_3: null,
            consignee_code: null,
            tag: 21
          },
          {
            consignee_1: "STOMANA INDUSTRYAD - PERNIK",
            consignee_2: "VLADAJSKO VASTANIE STR.1",
            consignee_3: "PERNIK,BULGARIA, BG 2304",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "EMAIL -KINTZIDS@SIDENOR,VIONET.GR",
            notified_data_2: null,
            notified_data_3: null,
            notified_party_sequence_number: 1,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "SAME AS CONSIGNEE",
            notified_data_2: "ATTN : MR KOSTAS ITZDIS",
            notified_data_3: "TEL: +39 76681435 / + 359 76670381",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "DIST : KUTCH, PIN-370230,",
            shipper_2: "GUJARAT.INDIA",
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "IFGL REFRACTORIES LIMITED",
            shipper_2: "PLOT NO. 638 -644, NEW AREA OF",
            shipper_3: "KANDLA SEZ, PO- GANDHIDHAM,",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA,BULGARIA",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: 'ALLOWED AT DESTINATION"',
              cargo_description_2: "(SSEA1124203)",
              cargo_description_3: null,
              cargo_description_4: null,
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "GRS WEIGHT. 17630 KGS",
              cargo_description_2: "LINE SEAL NO. 11693312",
              cargo_description_3: "SHIPPER SEAL NO. BOLT00678474",
              cargo_description_4: '"FOURTEEN(14) DAYS FREETIME',
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "INVOICE NO. 156 / 18-05-2019",
              cargo_description_2: "SHIPPING BILL NO.4007793  / 18",
              cargo_description_3: "-05-2019",
              cargo_description_4: "NET WEIGHT. 17340 KGS",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "01X40'FCL CONTAINER STC",
              cargo_description_2: "TOTAL 578 BALES",
              cargo_description_3: "MIXED USED CLOTHING",
              cargo_description_4: "HS CODE: 63090000",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: "40",
            cargo_sequence_number: 1,
            cargo_weight_gross: "17630",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 578,
            package_kind_code: "BL",
            package_kind_description: "BALE",
            tag: 41,
            unknown: "000017630000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "40",
              container_cargo_weight_kg: "17630",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "BL",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "CSLU6110965",
              container_number_of_packages: 578,
              container_size_and_type_iso_code: "4510",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "BOLT006784",
              stowage_location: null,
              tag: 51,
              unknown: "GC17630000BOLT00678474"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "R.T.PVT.LTD."
                },
                {
                  key: null,
                  value: "1 TO 578"
                }
              ],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "CY-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COSU6207824940",
        bol_prepaid_or_collect: "Prepaid",
        bol_prepaid_or_collect_code: "P",
        loading_date: "2019-05-22",
        place_of_loading: "INMUN",
        place_of_receipt: "INMUN",
        pre_vessel_code: "NX4",
        pre_vessel_name: "NORTHERN JADE",
        pre_voyage_number: "018W",
        quarantine_coding: null,
        shipping_and_carrier_number: "BOM14618001",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "1112",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "1112",
          sequence_number: 7,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "11000",
          currency: "INR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "THC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "11000",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "5",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SLF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "5",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "188",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "FAF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "188",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "3000",
          currency: "INR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "DOC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "3000",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190522",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "PREPAID",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "FAX:   30-210-4290808",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: null,
            up_remark_2: null,
            up_remark_3: "PHONE: 30-210-4290810"
          },
          {
            tag: 71,
            up_remark_1: "18538 PIRAEUS GREECE",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "WEIGHT DECLARED BY SHIPPER",
            up_remark_2: "COSCO SHIPPING LINES (GREECE) S.A.",
            up_remark_3: "85,AKTI MIAOULI & 2,FLESSA STR"
          },
          {
            tag: 71,
            up_remark_1: "ON CY-FO TERM",
            up_remark_2: "SHIPPER'S LOAD STOW COUNT AND SEAL",
            up_remark_3: "OCEAN FREIGHT PREPAID"
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: BOM14618001V1",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "VAT NO: BG126531386",
            consignee_2: null,
            consignee_3: null,
            consignee_code: null,
            tag: 21
          },
          {
            consignee_1: "EUROTEX LTD.",
            consignee_2: "66 GEORGI S. RAKOVSKI BLVD,",
            consignee_3: "6400 DIMITROVGRAD, BULGARIA.",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "9009 VARNA, BULGARIA",
            notified_data_2: null,
            notified_data_3: null,
            notified_party_sequence_number: 1,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "EUROTEX LTD.",
            notified_data_2: "PECHATNITSA IZTOK BUILDING,",
            notified_data_3: "WEST INDUSTRIAL ZONE,",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "GANDHIDHAM- KUTCH",
            shipper_2: "GUJARAT - 370230, INDIA.",
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "RAGHVANI TEXTILES PVT.LTD.",
            shipper_2: "PLOT NO.261, SECTOR-IV,",
            shipper_3: "KANDLA SPECIAL ECONOMIC ZONE,",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA,BULGARIA",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "FLOAT GLASS",
              cargo_description_2: null,
              cargo_description_3: null,
              cargo_description_4: null,
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: "45",
            cargo_sequence_number: 1,
            cargo_weight_gross: "72000",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 27,
            package_kind_code: "CR",
            package_kind_description: "CRATE",
            tag: 41,
            unknown: "000072000000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "15",
              container_cargo_weight_kg: "24000",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "CR",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "SEGU3038708",
              container_number_of_packages: 9,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "V498855",
              stowage_location: null,
              tag: 51,
              unknown: "GC24000000V498855"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "15",
              container_cargo_weight_kg: "24000",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "CR",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "CSLU2273650",
              container_number_of_packages: 9,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "V498924",
              stowage_location: null,
              tag: 51,
              unknown: "GC24000000V498924"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "15",
              container_cargo_weight_kg: "24000",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "CR",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "FCIU5430637",
              container_number_of_packages: 9,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "V498856",
              stowage_location: null,
              tag: 51,
              unknown: "GC24000000V498856"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "N/M"
                }
              ],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "CY-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COSU6207447510",
        bol_prepaid_or_collect: "Collect",
        bol_prepaid_or_collect_code: "C",
        loading_date: "2019-05-24",
        place_of_loading: "CNQIN",
        place_of_receipt: "CNQIN",
        pre_vessel_code: "NH2",
        pre_vessel_name: "TAMPA TRIUMPH",
        pre_voyage_number: "013W",
        quarantine_coding: null,
        shipping_and_carrier_number: "VRA00146001",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "2400",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "3",
          rate_of_freight_charge: "800",
          sequence_number: 12,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "1920",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "THC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "3",
          rate_of_freight_charge: "640",
          sequence_number: 11,
          tag: 61,
          unknown: null
        },
        {
          amount: "90",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SLF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "3",
          rate_of_freight_charge: "30",
          sequence_number: 10,
          tag: 61,
          unknown: null
        },
        {
          amount: "30",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "PSF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "3",
          rate_of_freight_charge: "10",
          sequence_number: 9,
          tag: 61,
          unknown: null
        },
        {
          amount: "600",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "HCS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "3",
          rate_of_freight_charge: "200",
          sequence_number: 8,
          tag: 61,
          unknown: null
        },
        {
          amount: "282",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "FAF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "3",
          rate_of_freight_charge: "94",
          sequence_number: 7,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "90",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "EIR",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "3",
          rate_of_freight_charge: "30",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "450",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "DOC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "450",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "CAS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "3",
          rate_of_freight_charge: "5",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "100",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "BKF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "100",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "45",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "3",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190524",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "COLLECT",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: null,
            up_remark_2: "PHONE: 30-210-4290810",
            up_remark_3: "FAX:   30-210-4290808"
          },
          {
            tag: 71,
            up_remark_1: null,
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "COSCO SHIPPING LINES (GREECE) S.A.",
            up_remark_2: "85,AKTI MIAOULI & 2,FLESSA STR",
            up_remark_3: "18538 PIRAEUS GREECE"
          },
          {
            tag: 71,
            up_remark_1: "ON CY-FO TERM",
            up_remark_2: "SHIPPER'S LOAD STOW COUNT AND SEAL",
            up_remark_3: "OCEAN FREIGHT COLLECT"
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: VRA00146001V5",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "GLASS TARGOVISHTE LTD.",
            consignee_2: "7700 TARGOVISHTE, BULGARIA",
            consignee_3: "INDUSTRIAL AREA",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "SAME AS CONSIGNEE",
            notified_data_2: null,
            notified_data_3: null,
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "FAX:(86 532)83881333",
            shipper_2: null,
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "RIDER GLASS COMPANY LIMITED",
            shipper_2: "QINGDAO  CHINA",
            shipper_3: "TEL:(86 532)83873000",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA,BULGARIA",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "PAPER BOX",
              cargo_description_2: "BALL-POINT PEN",
              cargo_description_3: "NOTEBOOK",
              cargo_description_4: null,
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: "68",
            cargo_sequence_number: 1,
            cargo_weight_gross: "14580",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 659,
            package_kind_code: "CT",
            package_kind_description: "CARTON",
            tag: 41,
            unknown: "000014580000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "68",
              container_cargo_weight_kg: "14580",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "CT",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "CSNU6662112",
              container_number_of_packages: 659,
              container_size_and_type_iso_code: "4510",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "9452633",
              stowage_location: null,
              tag: 51,
              unknown: "GC145800009452633"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "N/M"
                }
              ],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "CY-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COSU6206994940",
        bol_prepaid_or_collect: "Prepaid",
        bol_prepaid_or_collect_code: "P",
        loading_date: "2019-05-30",
        place_of_loading: "CNNBO",
        place_of_receipt: "CNNBO",
        pre_vessel_code: "CNG",
        pre_vessel_name: "COSCO SHIPPING CAPRI",
        pre_voyage_number: "005W",
        quarantine_coding: null,
        shipping_and_carrier_number: "NGB45496718V",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "1400",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "1400",
          sequence_number: 10,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "982",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "THC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "982",
          sequence_number: 9,
          tag: 61,
          unknown: null
        },
        {
          amount: "30",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SLF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "30",
          sequence_number: 8,
          tag: 61,
          unknown: null
        },
        {
          amount: "10",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "PSF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "10",
          sequence_number: 7,
          tag: 61,
          unknown: null
        },
        {
          amount: "188",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "FAF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "188",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "30",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "EEC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "30",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "450",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "DOC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "450",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "5",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "CAS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "5",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190530",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "PREPAID",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "ON CY-FO TERM",
            up_remark_2: "SHIPPER'S LOAD STOW COUNT AND SEAL",
            up_remark_3: "OCEAN FREIGHT PREPAID"
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: NGB45632975V1",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "TO ORDER",
            consignee_2: null,
            consignee_3: null,
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "TEL:+359 87 9641137",
            notified_data_2: "BG175450877",
            notified_data_3: null,
            notified_party_sequence_number: 1,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "MAX PLUS LTD",
            notified_data_2: "BUL.KONSTATIN VELICHKOV 133",
            notified_data_3: "SOFIA BULGARIA 1309",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "ADD:ROOM 725-728, B OF WEALTH",
            shipper_2: "MANSION ,YIWU ZHEJIANG,CHINA",
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "QIHANG TRADE GROUP CO.,LIMITED",
            shipper_2: "TEL: 86-579-85297209",
            shipper_3: "FAX:86-579-85923440",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "MALAYSIA (INTENDED)",
              cargo_description_2: null,
              cargo_description_3: null,
              cargo_description_4: null,
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "MALAYSIA AS PER LADEN",
              cargo_description_2: "ON BOARD DATE AND CONNECTING",
              cargo_description_3: "MOTHER VESSEL COSCO SHIPPING",
              cargo_description_4: "ALPS V.009W AT PORT KLANG,",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "HARMONIZED CODE:7219.32.0000,",
              cargo_description_2: "7219.33.0000,7219.34.0000",
              cargo_description_3: "SHIPPED ON BOARD CSCL HOUSTON",
              cargo_description_4: "V.088N AT PASIR GUDANG,",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "9 X 20'GP CONTAINERS SAID TO",
              cargo_description_2: "CONTAIN:",
              cargo_description_3: "17 PACKAGES",
              cargo_description_4: "STAINLESS STEEL COILS",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: "225",
            cargo_sequence_number: 1,
            cargo_weight_gross: "187296",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 17,
            package_kind_code: "PK",
            package_kind_description: "PACKAGE",
            tag: 41,
            unknown: "000187296000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "25",
              container_cargo_weight_kg: "21772",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "PK",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "CBHU5724628",
              container_number_of_packages: 2,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "9824347",
              stowage_location: null,
              tag: 51,
              unknown: "GC217720009824347"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "25",
              container_cargo_weight_kg: "20870",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "PK",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "IPXU3331893",
              container_number_of_packages: 2,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "9824349",
              stowage_location: null,
              tag: 51,
              unknown: "GC208700009824349"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "25",
              container_cargo_weight_kg: "21632",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "PK",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "IPXU3366760",
              container_number_of_packages: 2,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "9824278",
              stowage_location: null,
              tag: 51,
              unknown: "GC216320009824278"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "25",
              container_cargo_weight_kg: "21341",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "PK",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "TEMU2989519",
              container_number_of_packages: 2,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "9824397",
              stowage_location: null,
              tag: 51,
              unknown: "GC213410009824397"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "25",
              container_cargo_weight_kg: "18981",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "PK",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "CCLU3589241",
              container_number_of_packages: 2,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "9824396",
              stowage_location: null,
              tag: 51,
              unknown: "GC189810009824396"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "25",
              container_cargo_weight_kg: "22241",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "PK",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "CAXU6945965",
              container_number_of_packages: 2,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "9824277",
              stowage_location: null,
              tag: 51,
              unknown: "GC222410009824277"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "25",
              container_cargo_weight_kg: "23872",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "PK",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "CCLU3951896",
              container_number_of_packages: 2,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "9824344",
              stowage_location: null,
              tag: 51,
              unknown: "GC238720009824344"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "25",
              container_cargo_weight_kg: "20367",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "PK",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "TCKU3053540",
              container_number_of_packages: 1,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "9824350",
              stowage_location: null,
              tag: 51,
              unknown: "GC203670009824350"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "25",
              container_cargo_weight_kg: "16220",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "PK",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "CCLU3635769",
              container_number_of_packages: 2,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "9824341",
              stowage_location: null,
              tag: 51,
              unknown: "GC162200009824341"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "NIL"
                }
              ],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "CY-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COSU6202769150",
        bol_prepaid_or_collect: "Prepaid",
        bol_prepaid_or_collect_code: "P",
        loading_date: "2019-05-28",
        place_of_loading: "MYPAG",
        place_of_receipt: "MYPAG",
        pre_vessel_code: "CJC",
        pre_vessel_name: "COSCO SHIPPING ALPS",
        pre_voyage_number: "009W",
        quarantine_coding: null,
        shipping_and_carrier_number: "PSG00120024",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "8100",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "9",
          rate_of_freight_charge: "900",
          sequence_number: 9,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "3150",
          currency: "MYR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "THC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "9",
          rate_of_freight_charge: "350",
          sequence_number: 8,
          tag: 61,
          unknown: null
        },
        {
          amount: "270",
          currency: "MYR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SLF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "9",
          rate_of_freight_charge: "30",
          sequence_number: 7,
          tag: 61,
          unknown: null
        },
        {
          amount: "90",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "PSF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "9",
          rate_of_freight_charge: "10",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "846",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "FAF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "9",
          rate_of_freight_charge: "94",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "190",
          currency: "MYR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "DOC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "190",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "45",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "CAS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "9",
          rate_of_freight_charge: "5",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "135",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "9",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190528",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "PREPAID",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "PHONE: 30-210-4290810",
            up_remark_2: "FAX:   30-210-4290808",
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "COSCO SHIPPING LINES (GREECE) S.A.",
            up_remark_2: "85,AKTI MIAOULI & 2,FLESSA STR",
            up_remark_3: "18538 PIRAEUS GREECE"
          },
          {
            tag: 71,
            up_remark_1: "ON CY-FO TERM",
            up_remark_2: "FREIGHT PREPAID",
            up_remark_3: "SHIPPER'S LOAD STOW COUNT AND SEAL"
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: PSG00120024V9",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "TEL 00359 32 601 480",
            consignee_2: "FAX 00359 32 601 490",
            consignee_3: null,
            consignee_code: null,
            tag: 21
          },
          {
            consignee_1: "ET PHILIPEX ILIYA PHILIPOV",
            consignee_2: "12 KUKLENSKO SHOSE ST 4004 PLOVDIV",
            consignee_3: "- BULGARIA",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "TEL:00359 52 818 333",
            notified_data_2: "FAX:00359 52 818 340",
            notified_data_3: null,
            notified_party_sequence_number: 3,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "BG-9000 VARNA-BULGARIA",
            notified_data_2: null,
            notified_data_3: null,
            notified_party_sequence_number: 2,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "UNIMASTERS LOGISTICS SCS LIMITED",
            notified_data_2: "MARINE HOUSE",
            notified_data_3: "40,GRAF IGNATIEV STREET",
            notified_party_sequence_number: 2,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "TEL 00359 32 601 480",
            notified_data_2: "FAX 00359 32 601 490",
            notified_data_3: null,
            notified_party_sequence_number: 1,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "ET PHILIPEX ILIYA PHILIPOV",
            notified_data_2: "12 KUKLENSKO SHOSE ST 4004 PLOVDIV",
            notified_data_3: "- BULGARIA",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "81700 PASIR GUDANG,JOHOR, MALAYSIA",
            shipper_2: null,
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "BAHRU STAINLESS SDN BHD",
            shipper_2: "PTD 4069 (PLO 108), JALAN RUMBIA 4",
            shipper_3: "TANJUNG LANGSAT INDUSTRIAL COMPLEX,",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA,BULGARIA",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "ALPS V.009W AT PORT KLANG,",
              cargo_description_2: "MALAYSIA (INTENDED)",
              cargo_description_3: "*FREIGHT PREPAID*",
              cargo_description_4: null,
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "V.088N AT PASIR GUDANG,",
              cargo_description_2: "MALAYSIA AS PER LADEN",
              cargo_description_3: "ON BOARD DATE AND CONNECTING",
              cargo_description_4: "MOTHER VESSEL COSCO SHIPPING",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "HARMONIZED CODE:7219.32.0000;",
              cargo_description_2: "7219.33.0000",
              cargo_description_3: "* FAX 00359 52 818 340",
              cargo_description_4: "SHIPPED ON BOARD CSCL HOUSTON",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "1 X 20'GP CONTAINER SAID TO",
              cargo_description_2: "CONTAIN:",
              cargo_description_3: "2 PACKAGES OF STAINLESS STEEL",
              cargo_description_4: "COILS",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: "25",
            cargo_sequence_number: 1,
            cargo_weight_gross: "19390",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 2,
            package_kind_code: "PK",
            package_kind_description: "PACKAGE",
            tag: 41,
            unknown: "000019390000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "25",
              container_cargo_weight_kg: "19390",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "PK",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "SEGU3047084",
              container_number_of_packages: 2,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "9827644",
              stowage_location: null,
              tag: 51,
              unknown: "GC193900009827644"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "NIL"
                }
              ],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "CY-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COSU6202769140",
        bol_prepaid_or_collect: "Prepaid",
        bol_prepaid_or_collect_code: "P",
        loading_date: "2019-05-28",
        place_of_loading: "MYPAG",
        place_of_receipt: "MYPAG",
        pre_vessel_code: "CJC",
        pre_vessel_name: "COSCO SHIPPING ALPS",
        pre_voyage_number: "009W",
        quarantine_coding: null,
        shipping_and_carrier_number: "PSG00120024",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "900",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "900",
          sequence_number: 9,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "350",
          currency: "MYR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "THC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "350",
          sequence_number: 8,
          tag: 61,
          unknown: null
        },
        {
          amount: "30",
          currency: "MYR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SLF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "30",
          sequence_number: 7,
          tag: 61,
          unknown: null
        },
        {
          amount: "10",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "PSF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "10",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "94",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "FAF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "94",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "190",
          currency: "MYR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "DOC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "190",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "5",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "CAS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "5",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190528",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "PREPAID",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: null,
            up_remark_2: "PHONE: 30-210-4290810",
            up_remark_3: "FAX:   30-210-4290808"
          },
          {
            tag: 71,
            up_remark_1: null,
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "COSCO SHIPPING LINES (GREECE) S.A.",
            up_remark_2: "85,AKTI MIAOULI & 2,FLESSA STR",
            up_remark_3: "18538 PIRAEUS GREECE"
          },
          {
            tag: 71,
            up_remark_1: "ON CY-FO TERM",
            up_remark_2: "SHIPPER'S LOAD STOW COUNT AND SEAL",
            up_remark_3: "OCEAN FREIGHT PREPAID"
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: PSG00120024V9",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "TEL 00359 32 601 480",
            consignee_2: "FAX 00359 32 601 490",
            consignee_3: null,
            consignee_code: null,
            tag: 21
          },
          {
            consignee_1: "ET PHILIPEX ILIYA PHILIPOV",
            consignee_2: "12 KUKLENSKO SHOSE ST 4004",
            consignee_3: "PLOVDIV-BULGARIA",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "TEL 00359 52 818 333 *",
            notified_data_2: null,
            notified_data_3: null,
            notified_party_sequence_number: 3,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "BG-9000 VARNA - BULGARIA",
            notified_data_2: null,
            notified_data_3: null,
            notified_party_sequence_number: 2,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "UNIMASTERS LOGISTICS SCS LIMITED",
            notified_data_2: "MARINE HOUSE",
            notified_data_3: "40, GRAF IGNATIEV STREET",
            notified_party_sequence_number: 2,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "TEL 00359 32 601 480",
            notified_data_2: "FAX 00359 32 601 490",
            notified_data_3: null,
            notified_party_sequence_number: 1,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "ET PHILIPEX ILIYA PHILIPOV",
            notified_data_2: "12 KUKLENSKO SHOSE ST 4004",
            notified_data_3: "PLOVDIV-BULGARIA",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "81700 PASIR GUDANG,JOHOR, MALAYSIA",
            shipper_2: null,
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "BAHRU STAINLESS SDN BHD",
            shipper_2: "PTD 4069 (PLO 108), JALAN RUMBIA 4",
            shipper_3: "TANJUNG LANGSAT INDUSTRIAL COMPLEX,",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA,BULGARIA",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "LADEN ON BOARD DATE AT PASIR",
              cargo_description_2: "GUDANG, MALAYSIA CONNECTING TO",
              cargo_description_3: "TEXAS TRIUMPH V.0386 - 009W",
              cargo_description_4: "AT SINGAPORE (INTENDED)",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "BAGS (NON-PALLETIZED)",
              cargo_description_2: "ORDER NO :  4590032349",
              cargo_description_3: "FREIGHT COLLECT",
              cargo_description_4: "SHIPPED ON BOARD AS PER THE",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "FORM",
              cargo_description_2: "(TRIPLE PRESSED STEARIC ACID)",
              cargo_description_3: "PACKED IN 25 KGS NET KORTACID",
              cargo_description_4: "PAPER",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "1 X 40'GP CONTAINER SAID TO",
              cargo_description_2: "CONTAIN:-",
              cargo_description_3: "1000 BAGS",
              cargo_description_4: "25.00MT OF KORTACID 1655-BEADS",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: "50",
            cargo_sequence_number: 1,
            cargo_weight_gross: "25150",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 1000,
            package_kind_code: "BG",
            package_kind_description: "BAG",
            tag: 41,
            unknown: "000025150000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "50",
              container_cargo_weight_kg: "25150",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "BG",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "CSNU4083744",
              container_number_of_packages: 1000,
              container_size_and_type_iso_code: "4310",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "5427263",
              stowage_location: null,
              tag: 51,
              unknown: "GC251500005427263"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "PRODUCT OF"
                },
                {
                  key: null,
                  value: "MALAYSIA"
                },
                {
                  key: null,
                  value: "PACIFIC"
                },
                {
                  key: null,
                  value: "OLEOCHEMICALS"
                },
                {
                  key: null,
                  value: "SDN. BHD."
                }
              ],
              tag: 44
            },
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "GROSS WEIGHT:"
                },
                {
                  key: null,
                  value: "25.15KG"
                },
                {
                  key: null,
                  value: "TARE WEIGHT:"
                },
                {
                  key: null,
                  value: "0.15KG"
                },
                {
                  key: null,
                  value: "NET WEIGHT:"
                },
                {
                  key: null,
                  value: "25.00KG"
                }
              ],
              tag: 44
            },
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "(KORTACID)"
                },
                {
                  key: null,
                  value: "STEARIC ACID 16"
                },
                {
                  key: null,
                  value: "55 (K) P"
                },
                {
                  key: null,
                  value: "BATCH NO:"
                },
                {
                  key: null,
                  value: "460B190224D"
                },
                {
                  key: null,
                  value: "1460B190224E"
                }
              ],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "CY-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COSU6202758810W",
        bol_prepaid_or_collect: "Collect",
        bol_prepaid_or_collect_code: "C",
        loading_date: "2019-05-17",
        place_of_loading: "MYPAG",
        place_of_receipt: "MYPAG",
        pre_vessel_code: "CNF",
        pre_vessel_name: "COSCO SHIPPING LEO",
        pre_voyage_number: "006W",
        quarantine_coding: null,
        shipping_and_carrier_number: "ENA90204",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "1500",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "1500",
          sequence_number: 9,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "520",
          currency: "MYR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "THC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "520",
          sequence_number: 8,
          tag: 61,
          unknown: null
        },
        {
          amount: "30",
          currency: "MYR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SLF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "30",
          sequence_number: 7,
          tag: 61,
          unknown: null
        },
        {
          amount: "10",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "PSF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "10",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "150",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "FAF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "150",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "190",
          currency: "MYR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "DOC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "190",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "5",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "CAS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "5",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190517",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "PAYMENT METHOD = COLLECT",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "FREIGHT: BASIC FREIGHT COLLECT",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "EORI NO.: BGA831199907ZZZZ1",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "ON CY-FO TERM",
            up_remark_2: "OCEAN FREIGHT COLLECT",
            up_remark_3: "SHIPPER'S LOAD STOW COUNT AND SEAL"
          },
          {
            tag: 71,
            up_remark_1: "SEAWAY BILL ISSUED",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: ENA90204",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "BULGARIA",
            consignee_2: null,
            consignee_3: null,
            consignee_code: null,
            tag: 21
          },
          {
            consignee_1: "WERTA LTD",
            consignee_2: "INDUSTRIAL ZONE,",
            consignee_3: "KAZICHENE SOUTH 1532 SOFIA,",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "BULGARIA",
            notified_data_2: null,
            notified_data_3: null,
            notified_party_sequence_number: 1,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "WERTA LTD",
            notified_data_2: "INDUSTRIAL ZONE,",
            notified_data_3: "KAZICHENE SOUTH 1532 SOFIA,",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "SKY PARK @ ONE CITY, JALAN USJ 25/1",
            shipper_2: "47650 SUBANG JAYA, SELANGOR",
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "HELLMANN WORLDWIDE LOGISTICS SDN.",
            shipper_2: "BHD.",
            shipper_3: "SUITES D-5-2,3&3A, LEVEL 5, BLOCK D",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA,BULGARIA",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "ON BOARD DATE AND CONNECTING",
              cargo_description_2: "MOTHER VESSEL COSCO SHIPPING",
              cargo_description_3: "ALPS V.009W AT PORT KLANG,",
              cargo_description_4: "MALAYSIA (INTENDED)",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "HARMONIZED CODE:7219.33.0000",
              cargo_description_2: "SHIPPED ON BOARD CSCL HOUSTON",
              cargo_description_3: "V.088N AT PASIR GUDANG,",
              cargo_description_4: "MALAYSIA AS PER LADEN",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "2 X 20'GP CONTAINERS SAID TO",
              cargo_description_2: "CONTAIN:",
              cargo_description_3: "4 PACKAGES",
              cargo_description_4: "STAINLESS STEEL COILS",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: "50",
            cargo_sequence_number: 1,
            cargo_weight_gross: "43996",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 4,
            package_kind_code: "PK",
            package_kind_description: "PACKAGE",
            tag: 41,
            unknown: "000043996000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "25",
              container_cargo_weight_kg: "22944",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "PK",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "TLLU2012619",
              container_number_of_packages: 2,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "9824215",
              stowage_location: null,
              tag: 51,
              unknown: "GC229440009824215"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "25",
              container_cargo_weight_kg: "21052",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "PK",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "FCIU4866164",
              container_number_of_packages: 2,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "9824382",
              stowage_location: null,
              tag: 51,
              unknown: "GC210520009824382"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "NIL"
                }
              ],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "CY-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COSU6202756320",
        bol_prepaid_or_collect: "Prepaid",
        bol_prepaid_or_collect_code: "P",
        loading_date: "2019-05-28",
        place_of_loading: "MYPAG",
        place_of_receipt: "MYPAG",
        pre_vessel_code: "CJC",
        pre_vessel_name: "COSCO SHIPPING ALPS",
        pre_voyage_number: "009W",
        quarantine_coding: null,
        shipping_and_carrier_number: "PSG00120024",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "1800",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "2",
          rate_of_freight_charge: "900",
          sequence_number: 9,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "700",
          currency: "MYR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "THC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "2",
          rate_of_freight_charge: "350",
          sequence_number: 8,
          tag: 61,
          unknown: null
        },
        {
          amount: "60",
          currency: "MYR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SLF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "2",
          rate_of_freight_charge: "30",
          sequence_number: 7,
          tag: 61,
          unknown: null
        },
        {
          amount: "20",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "PSF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "2",
          rate_of_freight_charge: "10",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "188",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "FAF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "2",
          rate_of_freight_charge: "94",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "190",
          currency: "MYR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "DOC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "190",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "10",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "CAS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "2",
          rate_of_freight_charge: "5",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "30",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "2",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190528",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "PREPAID",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "PHONE: 30-210-4290810",
            up_remark_2: "FAX:   30-210-4290808",
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "COSCO SHIPPING LINES (GREECE) S.A.",
            up_remark_2: "85,AKTI MIAOULI & 2,FLESSA STR",
            up_remark_3: "18538 PIRAEUS GREECE"
          },
          {
            tag: 71,
            up_remark_1: "ON CY-FO TERM",
            up_remark_2: "FREIGHT PREPAID",
            up_remark_3: "SHIPPER'S LOAD STOW COUNT AND SEAL"
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: PSG00120024V9",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "TEL:00359 32 601 480",
            consignee_2: "FAX:00359 32 601 490",
            consignee_3: null,
            consignee_code: null,
            tag: 21
          },
          {
            consignee_1: "ET PHILIPEX ILIYA PHILIPOV",
            consignee_2: "12 KUKLENSKO SHOSE ST",
            consignee_3: "4004 PLOVDIV-BULGARIA",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "TEL:00359 52 818 333",
            notified_data_2: "FAX:00359 52 818 340",
            notified_data_3: null,
            notified_party_sequence_number: 3,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "BG-9000 VARNA-BULGARIA",
            notified_data_2: null,
            notified_data_3: null,
            notified_party_sequence_number: 2,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "UNIMASTERS LOGISTICS SCS LIMITED",
            notified_data_2: "MARINE HOUSE",
            notified_data_3: "40,GRAF IGNATIEV STREET",
            notified_party_sequence_number: 2,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "TEL:00359 32 601 480",
            notified_data_2: "FAX:00359 32 601 490",
            notified_data_3: null,
            notified_party_sequence_number: 1,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "ET PHILIPEX ILIYA PHILIPOV",
            notified_data_2: "12 KUKLENSKO SHOSE ST",
            notified_data_3: "4004 PLOVDIV-BULGARIA",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "81700 PASIR GUDANG,JOHOR, MALAYSIA",
            shipper_2: null,
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "BAHRU STAINLESS SDN BHD",
            shipper_2: "PTD 4069 (PLO 108), JALAN RUMBIA 4,",
            shipper_3: "TANJUNG LANGSAT INDUSTRIAL COMPLEX,",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA,BULGARIA",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "3 PALLETS=79 CARTONS",
              cargo_description_2: null,
              cargo_description_3: null,
              cargo_description_4: null,
              cargo_sequence_number: 2,
              tag: 47
            },
            {
              cargo_description_1: "NO.:NL19050116,NL19050117,N",
              cargo_description_2: "L19050118,NL19050119,NL1905012",
              cargo_description_3: "0,NL1",
              cargo_description_4: "9050121,NL19050122,NL19050123",
              cargo_sequence_number: 2,
              tag: 47
            },
            {
              cargo_description_1: "0600057749-1  6200005170",
              cargo_description_2: "0600057749-1  6200005170",
              cargo_description_3: "0600053872-1  6200005224",
              cargo_description_4: "INVOICE",
              cargo_sequence_number: 2,
              tag: 47
            },
            {
              cargo_description_1: "0600057679-1  6200005082",
              cargo_description_2: "0600057679-1  6200005082",
              cargo_description_3: "0600057940-1  6200004673",
              cargo_description_4: "0600058296-1  6200004787",
              cargo_sequence_number: 2,
              tag: 47
            },
            {
              cargo_description_1: "0600056659-1  6200005136",
              cargo_description_2: "0600056513-1  6200005134",
              cargo_description_3: "0600056513-1  6200005134",
              cargo_description_4: "0600057392-1  6200004787",
              cargo_sequence_number: 2,
              tag: 47
            },
            {
              cargo_description_1: "2-1",
              cargo_description_2: "PRINTED CIRCUIT BOARD",
              cargo_description_3: "H.S CODE: 85340090",
              cargo_description_4: "0600056659-1  6200005136",
              cargo_sequence_number: 2,
              tag: 47
            },
            {
              cargo_description_1: "2-1/5",
              cargo_description_2: "8230-1/57013-1/57004-1/58477/5",
              cargo_description_3: "8235-",
              cargo_description_4: "1/57986-1/58002-1/57990-1/5822",
              cargo_sequence_number: 2,
              tag: 47
            },
            {
              cargo_description_1: "1/576",
              cargo_description_2: "83-1/57689-1/58234-1/58223-1/5",
              cargo_description_3: "8007-",
              cargo_description_4: "1/58227-1/58236-1/57699-1/5768",
              cargo_sequence_number: 2,
              tag: 47
            },
            {
              cargo_description_1: "57973",
              cargo_description_2: "-1/57715-1/58014-1/58221-1/570",
              cargo_description_3: "36-1/",
              cargo_description_4: "57974-1/58010-1/57729-1/58209-",
              cargo_sequence_number: 2,
              tag: 47
            },
            {
              cargo_description_1: "57731",
              cargo_description_2: "-1/57967-1/57334-1/58243-1/573",
              cargo_description_3: "36-1/",
              cargo_description_4: "58487/57686-1/58211-1/57717-1/",
              cargo_sequence_number: 2,
              tag: 47
            },
            {
              cargo_description_1: "PO#",
              cargo_description_2: "0600057017-1/57707-1/58246-1/5",
              cargo_description_3: "7",
              cargo_description_4: "987-1/58237-1/58216-1/58017-1/",
              cargo_sequence_number: 2,
              tag: 47
            },
            {
              cargo_description_1: "0600055990",
              cargo_description_2: "2 PLTS= 28 CARTONS",
              cargo_description_3: "PLASTIC FILM CAPACITOR",
              cargo_description_4: "H.S CODE:85322590",
              cargo_sequence_number: 2,
              tag: 47
            },
            {
              cargo_description_1: "0600057235,0600057553,06000575",
              cargo_description_2: "8",
              cargo_description_3: "1,0600052535,0600057173,060005",
              cargo_description_4: "7102,",
              cargo_sequence_number: 2,
              tag: 47
            },
            {
              cargo_description_1: "( CONTAIN  96 CTNS )  ONLY.",
              cargo_description_2: "INDUCTOR",
              cargo_description_3: "H.S CODE: 85045000",
              cargo_description_4: "PO#",
              cargo_sequence_number: 2,
              tag: 47
            },
            {
              cargo_description_1: "PO. 0600055228-1,",
              cargo_description_2: "0600055730-1",
              cargo_description_3: "SAY TOTAL : THREE  ( 3 )",
              cargo_description_4: "PALLETS",
              cargo_sequence_number: 2,
              tag: 47
            },
            {
              cargo_description_1: "INVOICE NO.: ACI19050901",
              cargo_description_2: "TRANSFORMER",
              cargo_description_3: "H.S CODE: 850431",
              cargo_description_4: "INV.#TW2019050399",
              cargo_sequence_number: 2,
              tag: 47
            },
            {
              cargo_description_1: "THERMAL GAD PAD,",
              cargo_description_2: "THERMAL GAD PAD,",
              cargo_description_3: "THERMAL GAD PAD,",
              cargo_description_4: "H.S CODE: 3824999990",
              cargo_sequence_number: 2,
              tag: 47
            },
            {
              cargo_description_1: "4",
              cargo_description_2: "9048PCS=58CTNS",
              cargo_description_3: "16PALLETS=379CARTONS",
              cargo_description_4: "NAME ACCOUNT: OSRAM EOOD",
              cargo_sequence_number: 2,
              tag: 47
            },
            {
              cargo_description_1: "5-PPGI     50184PCS=246CTNS",
              cargo_description_2: "PO#0600057358-1",
              cargo_description_3: "6200002658",
              cargo_description_4: "MC-BASE-QTI-360X40X21X0.",
              cargo_sequence_number: 2,
              tag: 47
            },
            {
              cargo_description_1: "50170PCS=75CTNS",
              cargo_description_2: "PO#0600057700-1",
              cargo_description_3: "6200002656MC-BASE-QTI-360X30X2",
              cargo_description_4: "1X0.4",
              cargo_sequence_number: 2,
              tag: 47
            },
            {
              cargo_description_1: "PO#0600057914-1",
              cargo_description_2: "6200002744MC-COVER-QTP5-280X30",
              cargo_description_3: "X21X0",
              cargo_description_4: ".40-PPGI",
              cargo_sequence_number: 2,
              tag: 47
            },
            {
              cargo_description_1: "PPGI COVER AND BASE FOR",
              cargo_description_2: "LIGHTING PR",
              cargo_description_3: "ODUCTS",
              cargo_description_4: "H.S CODE: 9405990000",
              cargo_sequence_number: 2,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: "50.72",
            cargo_sequence_number: 2,
            cargo_weight_gross: "12275",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 33,
            package_kind_code: "PL",
            package_kind_description: "PALLET",
            tag: 41,
            unknown: "000012275000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 2,
              container_cargo_volume_m3: "50.72",
              container_cargo_weight_kg: "12275",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "PL",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "SEGU4282853",
              container_number_of_packages: 33,
              container_size_and_type_iso_code: "4510",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "11466353",
              stowage_location: null,
              tag: 51,
              unknown: "GC1227500011466353"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 2,
              marks: [
                {
                  key: null,
                  value: "/58243-1/"
                },
                {
                  key: null,
                  value: "57336-1/58487/5"
                },
                {
                  key: null,
                  value: "7686-"
                },
                {
                  key: null,
                  value: "7686-1/"
                }
              ],
              tag: 44
            },
            {
              cargo_sequence_number: 2,
              marks: [
                {
                  key: null,
                  value: "707-1/"
                },
                {
                  key: null,
                  value: "58246-1/57987-1"
                },
                {
                  key: null,
                  value: "/58237-1/"
                },
                {
                  key: null,
                  value: "58216-1/58017-1"
                },
                {
                  key: null,
                  value: "/57731-1/"
                },
                {
                  key: null,
                  value: "57967-1/57334-1"
                }
              ],
              tag: 44
            },
            {
              cargo_sequence_number: 2,
              marks: [
                {
                  key: null,
                  value: "# 879, KOSHOVET"
                },
                {
                  key: null,
                  value: "E AREA"
                },
                {
                  key: null,
                  value: "PLOVDIV"
                },
                {
                  key: null,
                  value: "DISTRICT,"
                },
                {
                  key: null,
                  value: "TRUD 4199"
                },
                {
                  key: null,
                  value: "0600057017-1/57"
                }
              ],
              tag: 44
            },
            {
              cargo_sequence_number: 2,
              marks: [
                {
                  key: null,
                  value: "MADE IN CHINA"
                },
                {
                  key: null,
                  value: "PALLET-NR. : 2"
                },
                {
                  key: null,
                  value: "OF 2"
                },
                {
                  key: null,
                  value: "PLASTIC FILM CA"
                },
                {
                  key: null,
                  value: "PACITOR"
                },
                {
                  key: null,
                  value: "OSRAM EOOD"
                }
              ],
              tag: 44
            },
            {
              cargo_sequence_number: 2,
              marks: [
                {
                  key: null,
                  value: "AOK"
                },
                {
                  key: null,
                  value: "C/NO.:1/7-7/7"
                },
                {
                  key: null,
                  value: "UM"
                },
                {
                  key: null,
                  value: "(IN DIA.)"
                },
                {
                  key: null,
                  value: "BULGARIA"
                },
                {
                  key: null,
                  value: "PLT/NO. 301-303"
                }
              ],
              tag: 44
            },
            {
              cargo_sequence_number: 2,
              marks: [
                {
                  key: null,
                  value: "AOK"
                },
                {
                  key: null,
                  value: "C/NO.:3/10-10/1"
                },
                {
                  key: null,
                  value: "0"
                },
                {
                  key: null,
                  value: "AOK"
                },
                {
                  key: null,
                  value: "C/NO.:5/10-10/1"
                },
                {
                  key: null,
                  value: "0"
                }
              ],
              tag: 44
            },
            {
              cargo_sequence_number: 2,
              marks: [
                {
                  key: null,
                  value: "55473"
                },
                {
                  key: null,
                  value: "55474-55477"
                },
                {
                  key: null,
                  value: "55464-55466"
                },
                {
                  key: null,
                  value: "55487-55496"
                },
                {
                  key: null,
                  value: "JUFU INDUSTRIAL"
                },
                {
                  key: null,
                  value: "(HK)CO.,LTD."
                }
              ],
              tag: 44
            },
            {
              cargo_sequence_number: 2,
              marks: [
                {
                  key: null,
                  value: "55428-55462"
                },
                {
                  key: null,
                  value: "55463"
                },
                {
                  key: null,
                  value: "55498-55507"
                },
                {
                  key: null,
                  value: "55508"
                },
                {
                  key: null,
                  value: "55467-55469"
                },
                {
                  key: null,
                  value: "55471-55472"
                }
              ],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        },
        {
          cargo_descriptions: [
            {
              cargo_description_1: "17 CARTONS=2 PACKAGES",
              cargo_description_2: null,
              cargo_description_3: null,
              cargo_description_4: null,
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "060005824",
              cargo_description_2: "7-1",
              cargo_description_3: "INVOICE#: E1220190509",
              cargo_description_4: "SUPPLIER NUMBER: 100119",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "PRINT CIRCUIT BOARD",
              cargo_description_2: "H.S CODE: 8534.00.00.40",
              cargo_description_3: "6200002537",
              cargo_description_4: "QTY: 15512PCS        PO#:",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: "0.55",
            cargo_sequence_number: 1,
            cargo_weight_gross: "342",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 2,
            package_kind_code: "PK",
            package_kind_description: "PACKAGE",
            tag: 41,
            unknown: "000000342000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0.55",
              container_cargo_weight_kg: "342",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "PK",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "SEGU4282853",
              container_number_of_packages: 2,
              container_size_and_type_iso_code: "4510",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "11466353",
              stowage_location: null,
              tag: 51,
              unknown: "GC0034200011466353"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "TECHIGH"
                }
              ],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "CY-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COSU6202072280W",
        bol_prepaid_or_collect: "Collect",
        bol_prepaid_or_collect_code: "C",
        loading_date: "2019-05-24",
        place_of_loading: "CNYTN",
        place_of_receipt: "CNYTN",
        pre_vessel_code: "NH6",
        pre_vessel_name: "TAIPEI TRIUMPH",
        pre_voyage_number: "010W",
        quarantine_coding: null,
        shipping_and_carrier_number: "ENA92271",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "1750",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "1750",
          sequence_number: 9,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "30",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SLF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "30",
          sequence_number: 8,
          tag: 61,
          unknown: null
        },
        {
          amount: "10",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "PSF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "10",
          sequence_number: 7,
          tag: 61,
          unknown: null
        },
        {
          amount: "1600",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ORC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "1600",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "40",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "EIR",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "40",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "450",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "DOC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "450",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "5",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "CAS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "5",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190524",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "PAYMENT METHOD = COLLECT",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "NAME ACCOUNT: OSRAM EOOD(SHOW ON SW",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "FREIGHT: BASIC FREIGHT COLLECT",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "ENA92271 FREIGHT COLLECT? ISSUE SWB",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "Y END  **********",
            up_remark_2: "SHIPPER:TEL NUMBER:86 755 83739707",
            up_remark_3: "SHIPPER:FAX NUMBER:86 755 8373 9779"
          },
          {
            tag: 71,
            up_remark_1: "Y START**********",
            up_remark_2: "NP POSTAL ID: 2227",
            up_remark_3: "**********NOTIFY PARTY SUPPLEMENTAR"
          },
          {
            tag: 71,
            up_remark_1: "**********CONSIGNEE SUPPLEMENTARY E",
            up_remark_2: "ND  **********",
            up_remark_3: "**********NOTIFY PARTY SUPPLEMENTAR"
          },
          {
            tag: 71,
            up_remark_1: "**********CONSIGNEE SUPPLEMENTARY S",
            up_remark_2: "TART**********",
            up_remark_3: "CN POSTAL ID: 2227"
          },
          {
            tag: 71,
            up_remark_1: "SH FAX: 86 755 8373 9779",
            up_remark_2: "**********SHIPPER SUPPLEMENTARY END",
            up_remark_3: "**********"
          },
          {
            tag: 71,
            up_remark_1: "SH TEL: 86 755 83739707",
            up_remark_2: "SH EMAIL: GRACE-MY.ZHANG@DBSCHENKER",
            up_remark_3: ".COM"
          },
          {
            tag: 71,
            up_remark_1: "SH ADDRESS: AS AGENT OF SCHENKEROCE",
            up_remark_2: "AN LIMITED",
            up_remark_3: "SH CONTACT INFORMATION: GRACE ZHANG"
          },
          {
            tag: 71,
            up_remark_1: "BASIC FREIGHT COLLECT",
            up_remark_2: "**********SHIPPER SUPPLEMENTARY STA",
            up_remark_3: "RT**********"
          },
          {
            tag: 71,
            up_remark_1: "OCEAN FREIGHT COLLECT",
            up_remark_2: "ON CY-FO TERM",
            up_remark_3: "SHIPPER'S LOAD STOW COUNT AND SEAL"
          },
          {
            tag: 71,
            up_remark_1: "SEAWAY BILL ISSUED",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: ENA92271",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "BULGARIA",
            consignee_2: "AS AGENT OF SCHENKEROCEAN LIMITED",
            consignee_3: null,
            consignee_code: null,
            tag: 21
          },
          {
            consignee_1: "SCHENKER EOOD",
            consignee_2: "1A, EVROPA BLVD.",
            consignee_3: "2227 BOZHURISTE (SOFIA)",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "BULGARIA",
            notified_data_2: null,
            notified_data_3: null,
            notified_party_sequence_number: 1,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "SCHENKER EOOD",
            notified_data_2: "1A, EVROPA BLVD.",
            notified_data_3: "2227 BOZHURISTE (SOFIA)",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "LUOHU DISTRICT SHENZHEN",
            shipper_2: "518104 CHINA USCI91440300781395032F",
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "SCHENKER CHINA LTD.SHENZHEN BRANCH",
            shipper_2: "21/F INTERNATIONAL TRADE CENTER",
            shipper_3: "NO.3002 RENMIN NAN ROAD",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "PIRAEUS",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "57958 0600057370 0600057734",
              cargo_description_2: "0600036",
              cargo_description_3: "567",
              cargo_description_4: "9PALLETS= 135CARTONS",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "600057051 0600057379",
              cargo_description_2: "0600057721 060",
              cargo_description_3: "0057942 0600042220 0600036960",
              cargo_description_4: "06000",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "PO:0600036623 0600056774",
              cargo_description_2: "0600056592",
              cargo_description_3: "0600036828 0600036653",
              cargo_description_4: "0600057016 0",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "16 PALLETS=400CARTONS",
              cargo_description_2: "ALUMINUM ELECTROLYTIC",
              cargo_description_3: "CAPACITOR",
              cargo_description_4: "H.S CODE: 8532229000",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "X29-P",
              cargo_description_2: "C",
              cargo_description_3: "46116PCS=108CTNS",
              cargo_description_4: "INVOICE NO.07-920190516(169)",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "29-PC",
              cargo_description_2: "50386PCS=59CTNS",
              cargo_description_3: "PO#0600057038-1",
              cargo_description_4: "6200004736MC-COVER-SSL-D-97X43",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "PLASTIC PARTS FOR LIGHTING",
              cargo_description_2: "H.S CODE:9405920000",
              cargo_description_3: "PO#0600057045-1",
              cargo_description_4: "6200004735MC-BASE-SSL-D-97X43X",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "6200004574MC-COVERANDHEATSINK-",
              cargo_description_2: "OTI 1",
              cargo_description_3: "60-300X50X35-PL",
              cargo_description_4: "10640PCS=133CTNS",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "21X0.",
              cargo_description_2: "40-PPGI",
              cargo_description_3: "33000PCS=100CTNS",
              cargo_description_4: "PO#0600057357-1",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "ODUCTS",
              cargo_description_2: "H.S CODE:9405990000",
              cargo_description_3: "PO#0600057361-1",
              cargo_description_4: "6200002661MC-COVER-QTI-425X30X",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "BDT20190517",
              cargo_description_2: "1PALLET=20CARTONS",
              cargo_description_3: "PPGI COVER AND BASE FOR",
              cargo_description_4: "LIGHTING PR",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "PO#060005790",
              cargo_description_2: "3-1 OSRAM PART#6200004765",
              cargo_description_3: "H.S CODE: 8504500000",
              cargo_description_4: "COMMERCIAL INVOICE NO.",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "PO#06000572",
              cargo_description_2: "71-1 OSRAM PART#6200004765",
              cargo_description_3: "H.S CODE: 8504500000",
              cargo_description_4: "INDUCTOR 6120PCS OSRAM",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "MC-INS-SHEET-PTI-35-70I-120*90",
              cargo_description_2: "-PETP",
              cargo_description_3: "H.S CODE: 85479090",
              cargo_description_4: "INDUCTOR  9180PCS OSRAM",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "280*30*21-100?M-PETP-2F",
              cargo_description_2: "LP",
              cargo_description_3: "MC-INSUL-OT",
              cargo_description_4: "360*30*21-100-PETP-2FLP",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "H.S CODE: 85340090",
              cargo_description_2: "INVOICE NO.:2019051801",
              cargo_description_3: "3PALLETS=64CARTONS",
              cargo_description_4: "MC-INSUL-OT",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "SILICON RUBBER SLEEVING",
              cargo_description_2: "H.S CODE: 3917320000",
              cargo_description_3: "1PALLET=11CARTONS",
              cargo_description_4: "BARE PRINTED CIRCUIT BOARD",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: "39.98",
            cargo_sequence_number: 1,
            cargo_weight_gross: "8472",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 31,
            package_kind_code: "PL",
            package_kind_description: "PALLET",
            tag: 41,
            unknown: "000008472000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "39.98",
              container_cargo_weight_kg: "8472",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "PL",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "FSCU5088307",
              container_number_of_packages: 31,
              container_size_and_type_iso_code: "4310",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "11449896",
              stowage_location: null,
              tag: 51,
              unknown: "GC0847200011449896"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "TECHNOLOGY CO."
                },
                {
                  key: null,
                  value: "LTD"
                },
                {
                  key: null,
                  value: "TO: OSRAM EOOD"
                }
              ],
              tag: 44
            },
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "0600056420"
                },
                {
                  key: null,
                  value: "0600058232"
                },
                {
                  key: null,
                  value: "0600058019"
                },
                {
                  key: null,
                  value: "0600058218"
                },
                {
                  key: null,
                  value: "FROM HUIZHOU"
                },
                {
                  key: null,
                  value: "BOODY"
                }
              ],
              tag: 44
            },
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "OSRAM  EOOD"
                },
                {
                  key: null,
                  value: "PO:"
                },
                {
                  key: null,
                  value: "0600056782"
                },
                {
                  key: null,
                  value: "0600057015"
                },
                {
                  key: null,
                  value: "0600057351"
                },
                {
                  key: null,
                  value: "0600058242"
                }
              ],
              tag: 44
            },
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "JUFU INDUSTRIAL"
                },
                {
                  key: null,
                  value: "(HK)CO.,LTD."
                },
                {
                  key: null,
                  value: "STW"
                },
                {
                  key: null,
                  value: "AISHI"
                },
                {
                  key: null,
                  value: "0600058516-1/38"
                },
                {
                  key: null,
                  value: "340PCS"
                }
              ],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "CY-FO",
        bol_is_transshipment_port: true,
        bol_is_transshipment_port_code: "Y",
        bol_number: "COSU6202072270W",
        bol_prepaid_or_collect: "Collect",
        bol_prepaid_or_collect_code: "C",
        loading_date: "2019-06-02",
        place_of_loading: "CNYTN",
        place_of_receipt: "CNYTN",
        pre_vessel_code: "NH2",
        pre_vessel_name: "TAMPA TRIUMPH",
        pre_voyage_number: "013W",
        quarantine_coding: null,
        shipping_and_carrier_number: "ENA92271",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "1700",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "1700",
          sequence_number: 11,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "30",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SLF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "30",
          sequence_number: 10,
          tag: 61,
          unknown: null
        },
        {
          amount: "10",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "PSF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "10",
          sequence_number: 9,
          tag: 61,
          unknown: null
        },
        {
          amount: "1600",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ORC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "1600",
          sequence_number: 8,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 7,
          tag: 61,
          unknown: null
        },
        {
          amount: "40",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENA",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "40",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "40",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "EIR",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "40",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "450",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "DOC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "450",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "5",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "CAS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "5",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "100",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AMF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "100",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190602",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "H",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "PAYMENT METHOD = COLLECT",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "NAME ACCOUNT: OSRAM EOOD(SHOW ON SW",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "FREIGHT: BASIC FREIGHT COLLECT",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "ENT AT SZ; PAYMENT TITLE:SCHENKER C",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "ENA92271 FREIGHT COLLECT? ISSUE SWB",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "Y END  **********",
            up_remark_2: "SHIPPER:TEL NUMBER:86 755 83739707",
            up_remark_3: "SHIPPER:FAX NUMBER:86 755 8373 9779"
          },
          {
            tag: 71,
            up_remark_1: "Y START**********",
            up_remark_2: "NP POSTAL ID: 2227",
            up_remark_3: "**********NOTIFY PARTY SUPPLEMENTAR"
          },
          {
            tag: 71,
            up_remark_1: "**********CONSIGNEE SUPPLEMENTARY E",
            up_remark_2: "ND  **********",
            up_remark_3: "**********NOTIFY PARTY SUPPLEMENTAR"
          },
          {
            tag: 71,
            up_remark_1: "**********CONSIGNEE SUPPLEMENTARY S",
            up_remark_2: "TART**********",
            up_remark_3: "CN POSTAL ID: 2227"
          },
          {
            tag: 71,
            up_remark_1: "SH FAX: 86 755 8373 9779",
            up_remark_2: "**********SHIPPER SUPPLEMENTARY END",
            up_remark_3: "**********"
          },
          {
            tag: 71,
            up_remark_1: "SH TEL: 86 755 83739707",
            up_remark_2: "SH EMAIL: GRACE-MY.ZHANG@DBSCHENKER",
            up_remark_3: ".COM"
          },
          {
            tag: 71,
            up_remark_1: "SH ADDRESS: AS AGENT OF SCHENKEROCE",
            up_remark_2: "AN LIMITED",
            up_remark_3: "SH CONTACT INFORMATION: GRACE ZHANG"
          },
          {
            tag: 71,
            up_remark_1: "BASIC FREIGHT COLLECT",
            up_remark_2: "**********SHIPPER SUPPLEMENTARY STA",
            up_remark_3: "RT**********"
          },
          {
            tag: 71,
            up_remark_1: "OCEAN FREIGHT COLLECT",
            up_remark_2: "ON CY-FO TERM",
            up_remark_3: "SHIPPER'S LOAD STOW COUNT AND SEAL"
          },
          {
            tag: 71,
            up_remark_1: "SEAWAY BILL ISSUED",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: ENA92271",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "BULGARIA",
            consignee_2: "AS AGENT OF SCHENKEROCEAN LIMITED",
            consignee_3: null,
            consignee_code: null,
            tag: 21
          },
          {
            consignee_1: "SCHENKER EOOD",
            consignee_2: "1A, EVROPA BLVD.",
            consignee_3: "2227 BOZHURISTE (SOFIA)",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "BULGARIA",
            notified_data_2: null,
            notified_data_3: null,
            notified_party_sequence_number: 1,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "SCHENKER EOOD",
            notified_data_2: "1A, EVROPA BLVD.",
            notified_data_3: "2227 BOZHURISTE (SOFIA)",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "LUOHU DISTRICT SHENZHEN",
            shipper_2: "518104 CHINA USCI91440300781395032F",
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "SCHENKER CHINA LTD.SHENZHEN BRANCH",
            shipper_2: "21/F INTERNATIONAL TRADE CENTER",
            shipper_3: "NO.3002 RENMIN NAN ROAD",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA",
        bol_port_of_discharge: "GRPIR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "FAX:0086(21)63609321",
              cargo_description_2: "**MOB: +359 887 770 462",
              cargo_description_3: "FAX: +359 2 9763646",
              cargo_description_4: "VAT:BG831199907",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "WASHING MACHINE",
              cargo_description_2: "4500098741 1140274 WHE 1041 B",
              cargo_description_3: "NAC#AMICA",
              cargo_description_4: "*TEL:0086(21)26100000",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: "71.83",
            cargo_sequence_number: 1,
            cargo_weight_gross: "12825",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 225,
            package_kind_code: "CT",
            package_kind_description: "CARTON",
            tag: 41,
            unknown: "000012825000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "71.83",
              container_cargo_weight_kg: "12825",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "CT",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "CCLU7493528",
              container_number_of_packages: 225,
              container_size_and_type_iso_code: "4510",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "V555865",
              stowage_location: null,
              tag: 51,
              unknown: "GC12825000V555865"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "N/M"
                }
              ],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "CY-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COSU6198232500W",
        bol_prepaid_or_collect: "Collect",
        bol_prepaid_or_collect_code: "C",
        loading_date: "2019-05-10",
        place_of_loading: "CNZJG",
        place_of_receipt: "CNZJG",
        pre_vessel_code: "NH6",
        pre_vessel_name: "TAIPEI TRIUMPH",
        pre_voyage_number: "010W",
        quarantine_coding: null,
        shipping_and_carrier_number: "ENA90295",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "1650",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "1650",
          sequence_number: 10,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "1151",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "THC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "1151",
          sequence_number: 9,
          tag: 61,
          unknown: null
        },
        {
          amount: "30",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SLF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "30",
          sequence_number: 8,
          tag: 61,
          unknown: null
        },
        {
          amount: "12",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "PSL",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "12",
          sequence_number: 7,
          tag: 61,
          unknown: null
        },
        {
          amount: "10",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "PSF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "10",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "30",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "EEC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "30",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "450",
          currency: "CNY",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "DOC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "450",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "5",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "CAS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "5",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190510",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "COLLECT",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "ON CY-FO TERM",
            up_remark_2: "SHIPPER'S LOAD STOW COUNT AND SEAL",
            up_remark_3: "OCEAN FREIGHT COLLECT"
          },
          {
            tag: 71,
            up_remark_1: "SEAWAY BILL ISSUED",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: ENA90295",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "BG-1532 SOFIA",
            consignee_2: "TEL: +359 2 9763622**",
            consignee_3: null,
            consignee_code: null,
            tag: 21
          },
          {
            consignee_1: "WERTA LTD-HELLMANN WORLDWIDE",
            consignee_2: "LOGISTICS",
            consignee_3: "INDUSTRIAL AREA KAZICHENE SOUTH",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "SAME AS CONSIGNEE",
            notified_data_2: null,
            notified_data_3: null,
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "TOWER A,FINANCIAL STREET HAILUN",
            shipper_2: "CENTER 440 HAILUN ROAD,SHANGHAI*",
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "HELLMANN WORLDWIDE LOGISTICS",
            shipper_2: "(CHINA) LIMITED.AS AGENT FOR",
            shipper_3: "PELORUS OCEAN LINE.RM 3004-3006,",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA,BULGARIA",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "DESTINATION(COMBINE).",
              cargo_description_2: null,
              cargo_description_3: null,
              cargo_description_4: null,
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "LOTTE CHEMICAL CORP.",
              cargo_description_2: "* FREIGHT PREPAID",
              cargo_description_3: "* FREETIME DEMURRAGE AND",
              cargo_description_4: "DETENTION 14DAYS AT",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "CIF PORT VARNA, BULGARIA",
              cargo_description_2: "ACCORDING TO INCOTERMS 2010",
              cargo_description_3: "* L/C NO. 10/12047",
              cargo_description_4: "* MANUFACTURED BY",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "TYPE - PET COPOLYMER IV 0.80",
              cargo_description_2: "PAPET BRAND,",
              cargo_description_3: "QUANTITY IN MT - 252",
              cargo_description_4: "TERMS OF DELIVERY:",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: "300",
            cargo_sequence_number: 1,
            cargo_weight_gross: "252720",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 240,
            package_kind_code: "BG",
            package_kind_description: "BAG",
            tag: 41,
            unknown: "000252720000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "25",
              container_cargo_weight_kg: "21060",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "BG",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "OOLU1381207",
              container_number_of_packages: 20,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "11287428",
              stowage_location: null,
              tag: 51,
              unknown: "GC2106000011287428"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "25",
              container_cargo_weight_kg: "21060",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "BG",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "CSNU1307331",
              container_number_of_packages: 20,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "10504579",
              stowage_location: null,
              tag: 51,
              unknown: "GC2106000010504579"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "25",
              container_cargo_weight_kg: "21060",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "BG",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "OOLU1081745",
              container_number_of_packages: 20,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "10507134",
              stowage_location: null,
              tag: 51,
              unknown: "GC2106000010507134"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "25",
              container_cargo_weight_kg: "21060",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "BG",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "OOLU2851753",
              container_number_of_packages: 20,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "11287427",
              stowage_location: null,
              tag: 51,
              unknown: "GC2106000011287427"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "25",
              container_cargo_weight_kg: "21060",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "BG",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "OOLU2850865",
              container_number_of_packages: 20,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "11287563",
              stowage_location: null,
              tag: 51,
              unknown: "GC2106000011287563"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "25",
              container_cargo_weight_kg: "21060",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "BG",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "OOLU1922209",
              container_number_of_packages: 20,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "11287403",
              stowage_location: null,
              tag: 51,
              unknown: "GC2106000011287403"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "25",
              container_cargo_weight_kg: "21060",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "BG",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "CSLU1680939",
              container_number_of_packages: 20,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "10504563",
              stowage_location: null,
              tag: 51,
              unknown: "GC2106000010504563"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "25",
              container_cargo_weight_kg: "21060",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "BG",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "OOLU1145583",
              container_number_of_packages: 20,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "10507094",
              stowage_location: null,
              tag: 51,
              unknown: "GC2106000010507094"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "25",
              container_cargo_weight_kg: "21060",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "BG",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "CSLU1472600",
              container_number_of_packages: 20,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "10503541",
              stowage_location: null,
              tag: 51,
              unknown: "GC2106000010503541"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "25",
              container_cargo_weight_kg: "21060",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "BG",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "CSLU1691424",
              container_number_of_packages: 20,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "10507136",
              stowage_location: null,
              tag: 51,
              unknown: "GC2106000010507136"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "25",
              container_cargo_weight_kg: "21060",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "BG",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "OOLU1895470",
              container_number_of_packages: 20,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "11287402",
              stowage_location: null,
              tag: 51,
              unknown: "GC2106000011287402"
            },
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "25",
              container_cargo_weight_kg: "21060",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "BG",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "CSNU1402540",
              container_number_of_packages: 20,
              container_size_and_type_iso_code: "2210",
              container_tare_weight_kg: "2000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "10504567",
              stowage_location: null,
              tag: 51,
              unknown: "GC2106000010504567"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "N/M"
                }
              ],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "CY-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COSU6193368910",
        bol_prepaid_or_collect: "Prepaid",
        bol_prepaid_or_collect_code: "P",
        loading_date: "2019-04-29",
        place_of_loading: "KRBUS",
        place_of_receipt: "KRBUS",
        pre_vessel_code: "CHE",
        pre_vessel_name: "COSCO SHIPPING RHINE",
        pre_voyage_number: "011W",
        quarantine_coding: null,
        shipping_and_carrier_number: "SEL08138004",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "8700",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "12",
          rate_of_freight_charge: "725",
          sequence_number: 10,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "1392000",
          currency: "KRW",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "THC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "12",
          rate_of_freight_charge: "116000",
          sequence_number: 9,
          tag: 61,
          unknown: null
        },
        {
          amount: "96000",
          currency: "KRW",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SLF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "12",
          rate_of_freight_charge: "8000",
          sequence_number: 8,
          tag: 61,
          unknown: null
        },
        {
          amount: "120",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "PSF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "12",
          rate_of_freight_charge: "10",
          sequence_number: 7,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "40000",
          currency: "KRW",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "DOC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "40000",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "60",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "CAS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "12",
          rate_of_freight_charge: "5",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "180",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "12",
          rate_of_freight_charge: "15",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "1032",
          currency: "KRW",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "271",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "12",
          rate_of_freight_charge: "86",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "53040",
          currency: "KRW",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "132",
          freight_charge_remark: null,
          freight_unit_of_quantity: "20F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "12",
          rate_of_freight_charge: "4420",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190429",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "PREPAID",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "0979437-0979442",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "OCEAN FREIGHT PREPAID",
            up_remark_2: "ON CY-FO TERM",
            up_remark_3: "SHIPPER'S LOAD STOW COUNT AND SEAL"
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: SEL08138004V13",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "TO THE ORDER OF",
            consignee_2: "THYSSENKRUPP MATERIALS BULGARIA LTD",
            consignee_3: null,
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "** IN SOUTH KOREA",
            notified_data_2: null,
            notified_data_3: null,
            notified_party_sequence_number: 2,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "PH. + 359 82 827 391",
            notified_data_2: null,
            notified_data_3: null,
            notified_party_sequence_number: 1,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "DONAU TRANZIT LTD.,",
            notified_data_2: "BULGARIA, 7000 RUSE,",
            notified_data_3: "ALEKSANDROVSKA 1 STR.,",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "GOYONG-GI DO, 410-380, SOUTH KOREA",
            shipper_2: null,
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "MAX AND MIGHTY GLOBAL CORPORATION,",
            shipper_2: "901 WESTERN TOWER II, 867 JANG-HANG",
            shipper_3: "DONG, ILSAN GU, GOYANG CITY,",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "PORT VARNA, BULGARIA",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "FREIGHT PREPAID",
              cargo_description_2: "SHIPPERS LOAD, COUNT, SEAL AND",
              cargo_description_3: "STOWAGE",
              cargo_description_4: "FCL/FCL",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "PORT, KUWAIT",
              cargo_description_2: "BY VESSEL AS SPIRIT OF CAPE",
              cargo_description_3: "TOWN V- 19013",
              cargo_description_4: "DELIVERY CY/CY",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "GROSS WEIGHT: 2600 KG",
              cargo_description_2: "HS CODE 87089900 94036099",
              cargo_description_3: "SHIPPED ON BOARD: 27-05-2019",
              cargo_description_4: "PORT OF LOADING: SHUWAIKH",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "CHASIS NO.5J6RM485XGL701666:)",
              cargo_description_2: "WEIGHT : 1600 KG",
              cargo_description_3: "USED FURNITURE",
              cargo_description_4: "WEIGHT :1000 KG",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "01 X 40FT HC CONTAINER STC:",
              cargo_description_2: "USED CAR",
              cargo_description_3: "(BRAND: HONDA CRV,",
              cargo_description_4: "COLOUR:BLACK ; MODEL: 2016;",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: null,
            cargo_sequence_number: 1,
            cargo_weight_gross: "2600",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 41,
            package_kind_code: "PK",
            package_kind_description: "PACKAGE",
            tag: 41,
            unknown: "000002600000"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "0",
              container_cargo_weight_kg: "2600",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "PK",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "BMOU4538594",
              container_number_of_packages: 41,
              container_size_and_type_iso_code: "4510",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "7436314",
              stowage_location: null,
              tag: 51,
              unknown: "GC026000007436314"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "2600 KG"
                }
              ],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "CY-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COSU6185710210",
        bol_prepaid_or_collect: "Prepaid",
        bol_prepaid_or_collect_code: "P",
        loading_date: "2019-05-27",
        place_of_loading: "KWKUW",
        place_of_receipt: "KWSWH",
        pre_vessel_code: "NGG",
        pre_vessel_name: "BERLIN EXPRESS",
        pre_voyage_number: "004W",
        quarantine_coding: null,
        shipping_and_carrier_number: "KWT00405002",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "862",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "862",
          sequence_number: 9,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "38",
          currency: "KWD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "THC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "38",
          sequence_number: 8,
          tag: 61,
          unknown: null
        },
        {
          amount: "2",
          currency: "KWD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SLF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "2",
          sequence_number: 7,
          tag: 61,
          unknown: null
        },
        {
          amount: "10",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "PSF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "10",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "188",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "FAF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "188",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "35",
          currency: "KWD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "DOC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "35",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "5",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "CAS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "5",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190527",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "OCEAN FREIGHT PREPAID",
            up_remark_2: "ON CY-FO TERM",
            up_remark_3: "SHIPPER'S LOAD STOW COUNT AND SEAL"
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: KWT00405002V1",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "MOTOPISTA, 1404 SOFIA, BULGARIA",
            consignee_2: "PHONE NO: 0035929832580;**",
            consignee_3: null,
            consignee_code: null,
            tag: 21
          },
          {
            consignee_1: "DR IVAN DIMITROV ORMANOV",
            consignee_2: "UI. RIKKARDO VAKKARINI,",
            consignee_3: "BLOCK-1, VHOD A, APARTMENT-4,",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "***TOWN V-19013",
            notified_data_2: null,
            notified_data_3: null,
            notified_party_sequence_number: 3,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "IVANORMANOV@HOTMAIL.COM",
            notified_data_2: null,
            notified_data_3: null,
            notified_party_sequence_number: 2,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "* PHONE NO: 1886886",
            notified_data_2: "** 00359988328106",
            notified_data_3: "EMAIL:  ZLATKAVAS@YAHOO.COM",
            notified_party_sequence_number: 2,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "MOTOPISTA, 1404 SOFIA, BULGARIA",
            notified_data_2: "PHONE NO: 0035929832580;**",
            notified_data_3: null,
            notified_party_sequence_number: 1,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "DR IVAN DIMITROV ORMANOV",
            notified_data_2: "UI. RIKKARDO VAKKARINI,",
            notified_data_3: "BLOCK-1, VHOD A, APARTMENT-4,",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "P.O.BOX: 8999 SALMIYA, CODE: 22060,",
            shipper_2: "KUWAITWWW.ALRASHIDHOSPITAL.ORG*",
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "DR IVAN DIMITROV ORMANOV",
            shipper_2: "AMMAN STREET, SALMIYA, BLOCK-10,",
            shipper_3: "BUILDING-43, FLOOR-2, APARTMENT-1,",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    },
    {
      cargo_descriptions: [
        {
          cargo_descriptions: [
            {
              cargo_description_1: "HS CODE : 29163990",
              cargo_description_2: "NET WEIGHT: 6000.000 KGS",
              cargo_description_3: null,
              cargo_description_4: null,
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "12.2018",
              cargo_description_2: "BATCH NO:IB19040165,IB19040166",
              cargo_description_3: "INV NO:1104301459 DT26.04.2019",
              cargo_description_4: "S.B.NO:  3930332 DT 03.05.2019",
              cargo_sequence_number: 1,
              tag: 47
            },
            {
              cargo_description_1: "1 X 40 SAID TO CONTAIN",
              cargo_description_2: "24(TWENTY FOUR) PALLETS",
              cargo_description_3: "IBUPROFEN BP/PH.EUR SN GRADE",
              cargo_description_4: "BUYERS ORDER NO:PO05374 DT:10.",
              cargo_sequence_number: 1,
              tag: 47
            }
          ],
          cargo_fields: {
            cargo_code: null,
            cargo_measurement: "40",
            cargo_sequence_number: 1,
            cargo_weight_gross: "7221.6",
            cargo_weight_net: null,
            is_cargo_dangerous: false,
            number_of_packages: 24,
            package_kind_code: "PL",
            package_kind_description: "PALLET",
            tag: 41,
            unknown: "000007221600"
          },
          cargo_in_containers: [
            {
              cargo_sequence_number: 1,
              container_cargo_volume_m3: "40",
              container_cargo_weight_kg: "7221.6",
              container_cycfs_item: "CY-FO",
              container_kind_of_packages: "PL",
              container_loading_status: "Full",
              container_loading_status_code: "F",
              container_number: "CBHU6474009",
              container_number_of_packages: 24,
              container_size_and_type_iso_code: "4310",
              container_tare_weight_kg: "4000",
              is_container_short_shipped: false,
              is_dangerous_container: false,
              is_shipper_owned_container: false,
              seal_number: "79034",
              stowage_location: null,
              tag: 51,
              unknown: "GC0722160079034"
            }
          ],
          cargo_marks: [
            {
              cargo_sequence_number: 1,
              marks: [
                {
                  key: null,
                  value: "IBUPROFEN BP.PH"
                },
                {
                  key: null,
                  value: ". EUR SN"
                },
                {
                  key: null,
                  value: "NET WT /GROSS"
                },
                {
                  key: null,
                  value: "WT"
                },
                {
                  key: null,
                  value: "BATCH NO. / DRU"
                },
                {
                  key: null,
                  value: "M NO."
                }
              ],
              tag: 44
            }
          ],
          dangerous_cargo_desc: {
            dangerous_cargo_49_field: {},
            dangerous_text: {}
          }
        }
      ],
      first_record_of_b_1: {
        bol_all_empty_ctn: false,
        bol_all_empty_ctn_code: "N",
        bol_cycfs_item: "CY-FO",
        bol_is_transshipment_port: false,
        bol_is_transshipment_port_code: "N",
        bol_number: "COSU6172274630W",
        bol_prepaid_or_collect: "Collect",
        bol_prepaid_or_collect_code: "C",
        loading_date: "2019-05-13",
        place_of_loading: "INCHE",
        place_of_receipt: "INCHE",
        pre_vessel_code: "CNF",
        pre_vessel_name: "COSCO SHIPPING LEO",
        pre_voyage_number: "006W",
        quarantine_coding: null,
        shipping_and_carrier_number: "VRA00164002V",
        shipping_order_number: null,
        tag: 12
      },
      freight_informations: [
        {
          amount: "1200",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "OFT",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "1200",
          sequence_number: 9,
          tag: 61,
          unknown: "Y"
        },
        {
          amount: "7275",
          currency: "INR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "THC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "7275",
          sequence_number: 8,
          tag: 61,
          unknown: null
        },
        {
          amount: "5",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "SLF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "5",
          sequence_number: 7,
          tag: 61,
          unknown: null
        },
        {
          amount: "10",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "PSF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "10",
          sequence_number: 6,
          tag: 61,
          unknown: null
        },
        {
          amount: "188",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "FAF",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "188",
          sequence_number: 5,
          tag: 61,
          unknown: null
        },
        {
          amount: "25",
          currency: "USD",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "ENS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "25",
          sequence_number: 4,
          tag: 61,
          unknown: null
        },
        {
          amount: "3000",
          currency: "INR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "DOC",
          freight_charge_remark: null,
          freight_unit_of_quantity: "LS",
          payable_at: null,
          prepaid_or_collect: "Prepaid",
          prepaid_or_collect_code: "P",
          quantity: "1",
          rate_of_freight_charge: "3000",
          sequence_number: 3,
          tag: 61,
          unknown: null
        },
        {
          amount: "5",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "CAS",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "5",
          sequence_number: 2,
          tag: 61,
          unknown: null
        },
        {
          amount: "15",
          currency: "EUR",
          equivalent_amount: "0",
          exchange_rate: "0",
          exchange_to_currency: null,
          freight_charge_code: "AFI",
          freight_charge_remark: null,
          freight_unit_of_quantity: "40F",
          payable_at: null,
          prepaid_or_collect: "Collect",
          prepaid_or_collect_code: "C",
          quantity: "1",
          rate_of_freight_charge: "15",
          sequence_number: 1,
          tag: 61,
          unknown: null
        }
      ],
      information_for_reference: {
        fields_not_in_manifest: {
          bol_place_and_date_of_issue: "190513",
          bol_place_of_issue: null,
          payable_at: null,
          prepaid_at: null,
          tag: 74
        },
        in_words: [],
        other_fields1: [
          {
            tag: 71,
            up_remark_1: "COLLECT",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: null,
            up_remark_2: "PHONE: 30-210-4290810",
            up_remark_3: "FAX:   30-210-4290808"
          },
          {
            tag: 71,
            up_remark_1: null,
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "COSCO SHIPPING LINES (GREECE) S.A.",
            up_remark_2: "85,AKTI MIAOULI & 2,FLESSA STR",
            up_remark_3: "18538 PIRAEUS GREECE"
          },
          {
            tag: 71,
            up_remark_1: "ON CY-FO TERM",
            up_remark_2: "SHIPPER'S LOAD STOW COUNT AND SEAL",
            up_remark_3: "OCEAN FREIGHT COLLECT"
          },
          {
            tag: 71,
            up_remark_1: "SEAWAY BILL ISSUED",
            up_remark_2: null,
            up_remark_3: null
          },
          {
            tag: 71,
            up_remark_1: "CSO NUMBER: VRA00164002V2",
            up_remark_2: null,
            up_remark_3: null
          }
        ],
        other_fields2: []
      },
      parties_concern: {
        consignee_fields: [
          {
            consignee_1: "BULGARIA",
            consignee_2: "VAT : BG83143017",
            consignee_3: null,
            consignee_code: null,
            tag: 21
          },
          {
            consignee_1: "UNIMASTERS LOGISTICS SCS LTD.",
            consignee_2: "12, PRODAN TARAKCHIEV STREET",
            consignee_3: "BG-1592, SOFIA AIRPORT",
            consignee_code: null,
            tag: 21
          }
        ],
        notify_party_fields: [
          {
            notified_code: null,
            notified_data_1: "BULGARIA",
            notified_data_2: "VAT : BG83143017",
            notified_data_3: null,
            notified_party_sequence_number: 1,
            tag: 26
          },
          {
            notified_code: null,
            notified_data_1: "UNIMASTERS LOGISTICS SCS LTD.",
            notified_data_2: "12, PRODAN TARAKCHIEV STREET",
            notified_data_3: "BG-1592, SOFIA AIRPORT",
            notified_party_sequence_number: 1,
            tag: 26
          }
        ],
        shipper_fields: [
          {
            shipper_1: "INDIA TEL : +91 011 40583000",
            shipper_2: null,
            shipper_3: null,
            shipper_code: null,
            tag: 16
          },
          {
            shipper_1: "GLOBUS TRANSITOS PVT. LTD.",
            shipper_2: "A-75, DDA SHED OKHLA INDUSTRIAL",
            shipper_3: "AREA PHASE II NEW DELHI - 110020",
            shipper_code: null,
            tag: 16
          }
        ]
      },
      port_place: {
        bol_port_of_delivery_code: "BGVAR",
        bol_port_of_delivery_name: "VARNA,BULGARIA",
        bol_port_of_discharge: "BGVAR",
        final_destination_code: null,
        final_destination_name: null,
        optional_ports: [],
        tag: 13
      }
    }
  ],
  shipment_instruction: {
    arrival_date: "2019-06-21",
    call_sign: null,
    line_mark_code: null,
    sailing_date: "2019-06-22",
    ship_registry_number: null,
    tag: 11,
    vessel_code: "S76",
    vessel_name: "UNI-ASPIRE",
    voyage_number: "011E"
  },
  trailer: {
    number_of_records: 1187,
    tag: 99
  }
};

export default data;
