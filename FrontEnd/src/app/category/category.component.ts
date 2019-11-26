import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
    styleUrls: ['./category.component.css'],
    animations: [
        trigger('fadeIn', [
            transition('void => *', [
                style({ opacity: 0 }),
                animate(1200, style({ opacity: 1 }))
            ])
        ])
    ]
})
export class CategoryComponent implements OnInit {

    title = "Fannie Mae | Reference Guide: ";
    content: string;

    category: string;

    getCategory(): void {
        this.category = this.route.snapshot.paramMap.get('category');
    }

    setContent(category: string) {
        if (category == 'Roof-Repair')
            this.content = `When an active leak is discovered appropriate measures should be taken to preserve the property by
                            stopping the leak. Fannie Mae typically does not encourage replacing roofs prior to sale, but in cases
                            where the servicer feels that this is necessary a first and second bid will be submitted to Fannie Mae for
                            consideration. Do not tarp flat roofs. Fannie Mae requires that when roof repairs exceed allowable, a bid to tarp, except as noted above and
                            a bid to patch must be submitted simultaneously on the same HomeTracker P&P form.
                            Include: dimensions of affected area, location of damage, active or inactive leak, and amount of bid to
                            complete work, full photo documentation, and advise Fannie Mae whether an insurance claim has been filed.`;

        else if (category == 'Boarding') {
            this.content = `Properties should not be boarded unless it is necessary to prevent vandalism, where required by local
                            ordinance, or when windows are broken. The allowable for any security door and/or crawl space will
                            include the cost of boarding and padlock(s). United Inches (UI) is calculated by adding length and width
                            (e.g., a 25x60 window is 85 UI). `

        }
        else if (category == 'Lock-Changes-And-Securing') {
            this.content = `Servicers are required to secure a rear or a secondary door for access on vacant properties, including
                            the main dwelling and all outbuildings.
                            Slider locks and window locks should be placed only if existing locks are inoperable or not present on
                            the main level and where accessible. `
        }
        else if (category == 'Hazards') {
            this.content = `The Fannie Mae allowable for cleaning includes the removal of all perishables from both the
                            refrigerator and freezer in addition to a wipe down of the appliance’s interior and exterior. A
                            separate allowable is provided for a stand alone freezer(s) to include removing all perishables
                            and a wipe down of the appliance’s interior and exterior.
                            The Fannie Mae allowable for cleaning should be used when fecal matter is present. This
                            allowable also includes cleaning with a toilet brush, wiping down exterior, and winterizing, if in
                            season.
                            Bare wires and uncapped or open gas/water lines are required to be capped regardless of utility
                            status.
                            The Fannie Mae allowable for removal of gas can(s) or propane tank(s) does not include
                            removing equipment that contains gas or propane (e.g., lawnmower, weed eater, grill, etc.). `
        }
        else if (category == 'Swimming-Pool') {
            this.content = `Servicers are required to drain, secure, and tarp or board where required by local ordinance. The
                            allowable may be used for meeting local ordinance and is not limited to the following: draining,
                            securing, locking gates, and repairing gate/fence panels that surround the pool/hot tub. Securing is
                            defined by Fannie Mae as the confirmation that all fences and gates are intact, secured, and a
                            minimum of four feet high.
                            Servicers must verify local ordinance and association standards regarding pools, draining,
                            treatment, and water levels. All trash located within the pool must be removed.
                            If the pool is already covered and the cover is secure, Servicers must verify if additional
                            fencing or securing is required by local ordinance or association.
                            All gates and doors leading to pool access must be secured by lock or padlock.
                            All missing sections of gates or fencing surrounding pool must be replaced.
                            Spas/Hot Tubs must be secured to local code.
                            Above ground pools shall be treated the same as in-ground pools and follow same
                            guidelines. `
        }
        else if (category == 'Lawn-Maintenance') {
            this.content = `Initial grass cuts should be performed on lots up to 15,000 sq ft. If lot size is greater then 15,000
                            sq ft, initial full lot and subsequent cuts and initial perimeter and subsequent perimeter cuts
                            should be submitted simultaneously. Perimeter is defined as 100x150 or 15,000 sq ft.
                            Incidental debris removal should be included as part of the allowable grass cut as well as
                            edging, minimal leaf removal, and clearing of all grass cut clippings. The yard and its
                            surroundings should be in model condition upon completion of the yard maintenance. Bids are
                            required for shrub trimming when shrubs affect condition, access to the property, or where local
                            ordinance dictates. Grass should typically be cut twice a month between April 1 and October 31. Approval is
                            required if more frequent re-cuts are necessary. Re-cuts once a month may be sufficient
                            depending on conditions. Prior approval for re-cuts from November 1 to March 31 must be
                            obtained unless otherwise prescribed in the PDF.`
        }
        else if (category == 'Winterization') {
            this.content = `Generally, all properties should be winterized between October 1 and March 31.
                            Winterizations are allowed during any month of the year in the following states:
                            AK, CT, IA, IL, IN, MA, ME, MI, MN, MT, ND, NE, NH, NY, OH, PA, RI, SD, VT, WI.
                            Properties should be winterized only once. The property may be re-winterized only if the initial
                            winterization is deemed to be no longer effective. The Servicer must submit bids to Fannie Mae for
                            winterization prior to the work being done. Winterizations should include shutting off the water source
                            either at the curb or the main interior water supply if it is not possible to shut it off at the curb.
                            Winterization also includes a complete draining of all plumbing and heating systems. For properties
                            where water services and utilities are shared with other units, such as condominiums, the utilities
                            should be maintained. The water service should also be maintained if needed for wet winterizations. `
        }
        else if (category == "Other") {
            this.content = `The most important element to defining an emergency is that an immediate response is necessary to
                            prevent damage or lessen the loss of property. Gradual and progressive deterioration or lack of
                            property maintenance does not qualify as an emergency.
                            If an existing sump pump is used to keep basements or crawl spaces dry, check the sump pump to
                            make sure it is operational. If the sump pump in question is electrical, ensure that the sump pump is
                            plugged into a power source and the electricity to the property is turned on and if necessary, transfer
                            the electricity into the servicer's name. If the sump pump is inoperable, the servicer may use the
                            allowable to replace the pump. If required for preservation, the Servicer must transfer utilities into their name during pre-foreclosure
                            proceedings. If local ordinance requires a vacant property to be registered, servicers should follow requirements.
                            Reimbursement will be provided only for the registration fee.`        }        else {            console.log('Invalid category');
        }
        }
        
              

    constructor(private route: ActivatedRoute) {
        this.getCategory();
        this.setContent(this.category)
      }

    ngOnInit() {
      
  }

}
