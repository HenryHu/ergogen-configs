module.exports = {
    nets: {
        net: undefined
    },
    params: {
        class: 'HOLE',
    },
    body: p => `
    (footprint Choc-2.25u-stabilizer-top-plate (layer F.Cu) (attr smd)
	${p.at}
    (property "Reference" "${p.ref}"
      (at 0 -15 ${p.r})
      (layer "F.SilkS")
      ${p.ref_hide}
      (effects (font (size 1 1) (thickness 0.15)))
    )
    
    (fp_line (start -15.15 -3.8) (end -13.8 -3.8) (stroke (width 0.12) (type solid) ) (layer "Edge.Cuts") )
    (fp_line (start -15.15 3.05) (end -15.15 -3.8) (stroke (width 0.12) (type solid) ) (layer "Edge.Cuts") )
    (fp_line (start -15.15 3.05) (end -8.85 3.05) (stroke (width 0.12) (type solid) ) (layer "Edge.Cuts") )
    (fp_line (start -13.8 -8.45) (end -13.8 -3.8) (stroke (width 0.12) (type solid) ) (layer "Edge.Cuts") )
    (fp_line (start -13.8 -8.45) (end -10.2 -8.45) (stroke (width 0.12) (type solid) ) (layer "Edge.Cuts") )
    (fp_line (start -10.2 -8.45) (end -10.2 -3.8) (stroke (width 0.12) (type solid) ) (layer "Edge.Cuts") )
    (fp_line (start -10.2 -3.8) (end -8.85 -3.8) (stroke (width 0.12) (type solid) ) (layer "Edge.Cuts") )
    (fp_line (start -8.85 3.05) (end -8.85 -3.8) (stroke (width 0.12) (type solid) ) (layer "Edge.Cuts") )
    (fp_line (start 8.85 -3.8) (end 10.2 -3.8) (stroke (width 0.12) (type solid) ) (layer "Edge.Cuts") )
    (fp_line (start 8.85 3.05) (end 8.85 -3.8) (stroke (width 0.12) (type solid) ) (layer "Edge.Cuts") )
    (fp_line (start 8.85 3.05) (end 15.15 3.05) (stroke (width 0.12) (type solid) ) (layer "Edge.Cuts") )
    (fp_line (start 10.2 -8.45) (end 10.2 -3.8) (stroke (width 0.12) (type solid) ) (layer "Edge.Cuts") )
    (fp_line (start 10.2 -8.45) (end 13.8 -8.45) (stroke (width 0.12) (type solid) ) (layer "Edge.Cuts") )
    (fp_line (start 13.8 -8.45) (end 13.8 -3.8) (stroke (width 0.12) (type solid) ) (layer "Edge.Cuts") )
    (fp_line (start 13.8 -3.8) (end 15.15 -3.8) (stroke (width 0.12) (type solid) ) (layer "Edge.Cuts") )
    (fp_line (start 15.15 3.05) (end 15.15 -3.8) (stroke (width 0.12) (type solid) ) (layer "Edge.Cuts") )

    )`
}
