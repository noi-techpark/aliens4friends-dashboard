exports.headers = [
  {
    text: "",
    align: "start",
    value: "isVariant",
    type: "flags",
    tooltip: "package id",
  },
  {
    text: "ID",
    align: "start",
    value: "id",
    type: "string",
    fixed: true,
    width: "100px",
    tooltip: "package id",
  },
  {
    text: "Aud. Progress",
    align: "start",
    width: "150px",
    type: "progress",
    value: "progress",
    valueFilter: {
      value: "",
      unit: "%",
      operator: ">",
    },
    fixed: true,
    tooltip: "audit_done / audit_total * 100",
  },
  {
    text: "Aud. Workload",
    width: "150px",
    align: "center",
    type: "workload",
    value: "workload_total",
    valueFilter: {
      value: "",
      unit: "u/m",
      operator: ">",
    },
    fixed: true,
    tooltip: "audit_total",
  },
  {
    text: "Main licenses",
    value: "statistics.licenses.license_audit_findings.main_licenses",
    type: "implode_tag",
    width: "120px",
    fixed: true,
    autofilter: true,
    sortable: false,
    tooltip: "license_audit_findings.main_licenses",
  },
  {
    text: "Distros",
    value: "tags.distro",
    type: "implode_tag",
    fixed: true,
    autofilter: true,
    sortable: false,
    tooltip: "tags.distro",
  },
  {
    text: "Images",
    value: "tags.image",
    type: "implode_tag",
    fixed: true,
    autofilter: true,
    sortable: false,
    tooltip: "tags.image",
  },
  {
    text: "Machines",
    width: "100px",
    value: "tags.machine",
    type: "implode_tag",
    fixed: true,
    filtered: true,
    autofilter: true,
    sortable: false,
    tooltip: "tags.machin",
  },
  {
    text: "Releases",
    value: "tags.release",
    type: "implode_tag",
    width: "100px",
    fixed: true,
    autofilter: true,
    sortable: false,
    tooltip: "tags.release",
  },
  {
    text: "Scan",
    value: "statistics.licenses.license_scanner_findings",
    align: "start",
    type: "chart",
    width: "200px",
    fixed: true,
    autofilter: true,
    sortable: false,
    tooltip: "license_scanner_findings",
  },
  {
    text: "Audit All",
    value: "statistics.licenses.license_audit_findings.all_licenses",
    align: "start",
    type: "chart",
    width: "200px",
    fixed: true,
    autofilter: true,
    sortable: false,
    tooltip: "all_licenses",
  },
  {
    text: "Debian Match",
    value: "match",
    align: "end",
    type: "match",
    width: "115px",
    valueFilter: {
      value: "",
      unit: "%",
      operator: ">",
    },
    sortable: false,
    fixed: true,
    tooltip: "debian_matching.ip_matching_files / statistics.files.upstream_source_total",
  },
];
